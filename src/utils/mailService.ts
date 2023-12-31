import { sendEmail } from "../../lib/email"


interface ApplianceEntry {
    appliance: string;
    consumption_kwh: number;
    size: string;
  }

export async function sendReport(to: string, subject: string, content: ApplianceEntry[]) {
    await sendEmail({
        to: to,
        subject: subject,
        html: generateHtmlEmail(content, 'This is your weekly report!')
    } )
}

export async function sendDalyRoutine(to: string, subject: string, content: ApplianceEntry[]) {
    await sendEmail({
        to: to,
        subject: subject,
        html: generateHtmlEmail(content, 'This is your Daily report!')
    } )
}

export async function sendBestDevice(to: string, subject: string, content: ApplianceEntry[]) {
    await sendEmail({
        to: to,
        subject: subject,
        html: generateHtmlCheapest(content, "Today: ")
    } )
}


function generateHtmlCheapest(applianceData: ApplianceEntry[], title:string): string {
    const logoUrl = 'https://media.discordapp.net/attachments/1175399192718475334/1175783939273658521/blurred-rainforest-background-free-photo.png?ex=656c7d20&is=655a0820&hm=84fb10288f777861a2e9c5bad2dd07d886f4333a727300030de08a7773df09e4&=&width=1410&height=480';
  
    const htmlContent = `
      <html>
        <head>
          <style>
            h1 {
              color: #333;
            }
            table {
              border-collapse: collapse;
              width: 100%;
            }
            th, td {
              border: 1px solid #ddd;
              padding: 8px;
              text-align: left;
            }
            th {
              background-color: #f2f2f2;
            }
            img {
              width: 700px; 
              height: auto; /* Maintain aspect ratio */
              display: block;
              margin: 0 auto; /* Center the image */
            }
          </style>
        </head>
        <body>
          <img src="${logoUrl}" alt="Company Logo">
          <h1>${title}</h1>  
          <p>Total Consumption: ${calculateTotalConsumption(applianceData)} kWh</p>
          <h2>${findCheapestHour(applianceData)}</h2>
        </body>
      </html>
    `;
  
    return htmlContent;
  }

  
function generateHtmlEmail(applianceData: ApplianceEntry[], title:string): string {
    const logoUrl = 'https://media.discordapp.net/attachments/1175399192718475334/1175783939273658521/blurred-rainforest-background-free-photo.png?ex=656c7d20&is=655a0820&hm=84fb10288f777861a2e9c5bad2dd07d886f4333a727300030de08a7773df09e4&=&width=1410&height=480';
  
    const htmlContent = `
      <html>
        <head>
          <style>
            h1 {
              color: #333;
            }
            table {
              border-collapse: collapse;
              width: 100%;
            }
            th, td {
              border: 1px solid #ddd;
              padding: 8px;
              text-align: left;
            }
            th {
              background-color: #f2f2f2;
            }
            img {
              width: 700px; 
              height: auto; /* Maintain aspect ratio */
              display: block;
              margin: 0 auto; /* Center the image */
            }
          </style>
        </head>
        <body>
          <img src="${logoUrl}" alt="Company Logo">
          <h1>${title}</h1>  
          <p>Total Consumption: ${calculateTotalConsumption(applianceData)} kWh</p>
          <table>
            <tr>
              <th>Appliance</th>
              <th>Consumption (kWh)</th>
              <th>Size</th>
            </tr>
            ${generateTableRows(applianceData)}
          </table>
        </body>
      </html>
    `;
  
    return htmlContent;
  }
  
  function calculateTotalConsumption(applianceData: ApplianceEntry[]): number {
    return Number(applianceData.reduce((total, entry) => total + entry.consumption_kwh, 0).toFixed(2));
  }

  function findCheapestHour(applianceData: ApplianceEntry[]): string {
    if (applianceData.length === 0) {
      return "No data available";
    }
  
    let cheapestEntry = applianceData.reduce((cheapest, entry) => {
      return entry.consumption_kwh < cheapest.consumption_kwh ? entry : cheapest;
    });
  
    return `The cheapest device is: ${cheapestEntry.appliance} with ${cheapestEntry.consumption_kwh.toFixed(2)} kWh`;
  }
  
  function generateTableRows(applianceData: ApplianceEntry[]): string {
    return applianceData
      .map(entry => `<tr><td>${entry.appliance}</td><td>${entry.consumption_kwh}</td><td>${entry.size}</td></tr>`)
      .join('');
  }