"use client";
import { Bar } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
import { useEffect, useState } from "react";
import { Query, UserSession } from "~/types/mongo";
import Spinner from "~/components/Spinner";
import { appliances } from "~/utils/data";
import { FaTrashCan } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa";

Chart.register(...registerables);

export default function Onboard() {
  const [query, setQuery] = useState<Query>();
  const [user, setUser] = useState<UserSession | null>();
  const [result, setResult] = useState<boolean>(false);
  const [selected, setSelected] = useState<typeof appliances>([]);

  useEffect(() => {
    fetch("/api/me", { credentials: "include" }).then((d) => d.json()).then(
      setUser,
    );
  }, []);

  useEffect(() => {
    if (!user) return;
    fetch(`/api/user?email=${user.sessionClaims.email}`, {
      credentials: "include",
    }).then(async (d) => d.ok ? (await (d.json())) : null).then((res) => {
      setQuery(res.data.document);
      setResult(res.data.document);
    });
  }, [user]);

  const handleDelete = (index: number) => {
    setSelected((prevSelected) => prevSelected.filter((_, i) => i !== index));
  };

  // FIXME: tailwind stripes away classes dynamically, therefore this workaround is needed, change ASAP.
  const getColor = (size: "small" | "medium" | "big") =>
    ({
      small:
        `transition-all w-36 h-36 rounded bg-white border-4 border-green-500 hover:bg-green-500 flex flex-col items-end justify-start p-4 text-center cursor-pointer`,
      medium:
        `transition-all w-36 h-36 rounded bg-white border-4 border-orange-500 hover:bg-orange-500 flex flex-col items-end justify-start p-4 text-center cursor-pointer`,
      big:
        `transition-all w-36 h-36 rounded bg-white border-4 border-red-500 hover:bg-red-500 flex flex-col items-end justify-start p-4 text-center cursor-pointer`,
    })[size];

  const handleSubmit = () => {
    fetch("/api/new", {
      body: JSON.stringify({
        email: user?.sessionClaims.email!,
        appliances: selected,
      }),
      method: "post",
      credentials: "include",
    }).then(async (d) => ({ data: await d.json(), ok: d.ok })).then(
      ({ data, ok }) => {
        if (!ok) console.error({ data });
        setResult(true);
      },
    );
  };

  if (!user) {
    return <Spinner />;
  }

  const ChartComponent = ({ data }: { data: Query }) => {
    const applianceNames = data.appliances.map((appliance) =>
      appliance.appliance
    );
    const consumptionValues = data.appliances.map((appliance) =>
      appliance.consumption_kwh
    );

    const chartData = {
      labels: applianceNames,
      datasets: [
        {
          label: "Consumption (kWh)",
          data: consumptionValues,
          backgroundColor: "rgba(75, 192, 192, 0.2)",
          borderColor: "rgba(75, 192, 192, 1)",
          borderWidth: 1,
        },
      ],
    };

    const chartOptions = {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    };

    return (
      <div className="w-full max-w-lg flex items-center justify-center flex-col">
        <h2>Total Consumption per Appliance</h2>
        <Bar data={chartData} options={chartOptions} />
      </div>
    );
  };

  return (!result
    ? (
      <section className="flex items-start justify-center w-full m-4 mb-8">
        <div className="flex flex-wrap gap-4 max-w-2xl">
          {appliances.map((
            { appliance, consumption_kwh, size },
            idx,
          ) => (
            <div
              key={`${appliance}-${idx}-${selected.length}`}
              className={getColor(size)}
              onClick={() => setSelected((sel) => [...sel, appliances[idx]])}
            >
              <p className="self-end">
                <span className="font-bold">{consumption_kwh}</span> KwH
              </p>
              <p className="mt-auto mx-auto">{appliance}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 mb-6">
          <h1 className="text-3xl font-bold mb-4">Selected Appliances</h1>
          {selected.map(({ appliance, consumption_kwh }, idx) => (
            <div
              className="flex items-center mb-2 gap-3"
              key={appliance + selected.length}
            >
              <FaTrashCan
                onClick={() => handleDelete(idx)}
                className="cursor-pointer hover:text-red-500 transition-all"
              />
              <p>
                <span className="font-semibold">{appliance}</span> -{" "}
                {consumption_kwh} kWh
              </p>
            </div>
          ))}
          <div className="flex flex-col">
            <div className="border-t border-gray-300 my-2 w-full"></div>
            <div className="flex justify-between items-center">
              <p className="text-xl">
                <span className="font-bold mt-4">Total:</span>{" "}
                {selected.reduce((acc, val) => acc + val.consumption_kwh, 0)
                  .toFixed(2)} kWh
              </p>
              <button
                onClick={handleSubmit}
                className="transition-all font-semibold flex gap-4 items-center border-2 hover:text-white hover:bg-green-600 border-green-600 bg-white text-green-600 p-2 rounded-md"
              >
                Submit <FaChevronRight />
              </button>
            </div>
          </div>
        </div>
      </section>
    )
    : (
      <section className="flex items-center flex-col justify-center w-full gap-2 my-5">
        <ChartComponent data={query!} />
        {query?.appliances.map((app) => (
          <div className="w-full max-w-lg bg-white border-2 border-gray-400 h-16 rounded-md flex items-center">
            <p className="ml-4">
              Consumed{" "}
              <span className="font-semibold">{app.consumption_kwh}</span>{" "}
              kwh by using the <span>{app.appliance}</span> for{" "}
              {Math.floor(Math.random() * 59)} minutes
            </p>
          </div>
        ))}
      </section>
    ));
}
