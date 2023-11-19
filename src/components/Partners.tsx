import { FC } from "react";

type Company = {
  name: string;
  logo: string;
};

const PartnerCompanies: FC<{ companies: Company[] }> = ({ companies }) => {
  return (
    <div className="text-center mb-[60px]" id="sponsor">
      <h2 className="text-3xl font-bold mb-4 mt-6">Platinum Sponsor</h2>
      <div className="flex justify-center mt-5">
        {companies.map((company, index) => (
          <div key={index} className="relative mx-4 mt-4">
            <img
              src={company.logo}
              alt={company.name}
              className="max-w-full h-auto w-auto max-h-[60px]"
            />
            <div className="absolute inset-0 bg-white opacity-30"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PartnerCompanies;
