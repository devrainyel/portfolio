import { RiMessageFill, RiLightbulbFlashFill } from "react-icons/ri";
import { AiOutlineRise } from "react-icons/ai";

const cardContent = [
  {
    icon: RiLightbulbFlashFill,
    title: 'Problem-Solving',
    body: "I enjoy identifying challenges and finding efficient solutions through logical thinking and creativity. I approach problems step by step, focusing on understanding the root cause and delivering practical results."
  },
  {
    icon: AiOutlineRise,
    title: 'Adaptability',
    body: "I can easily adjust to new tools, environments, and workflows. I see change as an opportunity to grow and learn, which helps me stay flexible and productive in different situations."
  },
  {
    icon: RiMessageFill,
    title: 'Communication',
    body: "I value teamwork and believe great results come from working together. I communicate clearly, listen actively, and contribute ideas to achieve shared goals with others."
  },
];

export function SoftSkills() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-20 max-w-6xl w-full">
      {cardContent.map((card, index) => (
        <div key={index} className="border border-[#4b5563] rounded-md p-6 sm:p-10">
          <div className="flex items-center gap-2 mb-5">
            <card.icon className="icon" size={25} /> 
            <h3 className="text-lg sm:text-xl font-extrabold">{card.title}</h3>
          </div>
          <p className="text-sm sm:text-base leading-relaxed">
            {card.body}
          </p>
        </div>
      ))}
    </div>
  );
}