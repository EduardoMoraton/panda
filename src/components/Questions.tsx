"use client";
import Faq from "react-faq-component";

const data = {
  title: "Frequently asked questions",
  rows: [
    {
      title:
        "How does the tool track electricity consumption based on activities?",
      content:
        "The tool utilizes a database of average power consumption for various household activities. When you input your activities, it calculates the expected electricity usage based on this data. It provides you with a summary of your overall consumption, helping you understand where your energy is going.",
    },
    {
      title: "What types of activities can I track with the tool?",
      content:
        "You can track a wide range of activities, including but not limited to appliances like dishwashers, TVs, computers, and other common household devices. The tool is designed to be versatile, allowing you to input any activity that contributes to your electricity usage.",
    },
    {
      title:
        "How does the tool send email summaries, and can I customize the frequency of these emails?",
      content:
        "The tool sends email summaries using the provided email address during setup. You can customize the frequency of these emails based on your preference. Whether you want a daily, weekly, or monthly summary, the tool can be configured to meet your specific needs.",
    },
    {
      title:
        "Is my personal data and electricity usage information secure when using this tool?",
      content:
        "Yes, we take privacy and security seriously. Your personal data and electricity usage information are stored securely, and we do not share or sell your information to third parties. The tool is designed with privacy in mind, and we adhere to strict security practices to protect your data.",
    },
    {
      title:
        "Can I use the tool on multiple devices, and is there a mobile app available?",
      content:
        "es, the tool is designed to be accessible from multiple devices. It is web-based, so you can access it from your computer, tablet, or smartphone with internet connectivity. While there may not be a dedicated mobile app, the web interface is optimized for mobile use, providing a seamless experience across different devices.",
    },
  ],
};

export default function Questions() {
  return (
    <section className="w-full flex items-center justify-center my-4" id="faq">
      <div className="w-[900px] min-h-[450px] rounded-lg py-8">
        <Faq data={data} />
      </div>
    </section>
  );
}
