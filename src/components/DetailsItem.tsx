import { memo, type ReactNode } from "react";

interface Props {
  title: string;
  value: string;
  icon?: ReactNode; // optional icon
}

const DetailsItem: React.FC<Props> = memo(({ title, value, icon }: Props) => {
  return (
    <div
      className="
        flex items-center gap-3 p-4 rounded-xl 
        bg-[#e0e0e0] 
        shadow-[8px_8px_16px_#bebebe,-8px_-8px_16px_#ffffff] 
        hover:shadow-[inset_4px_4px_8px_#bebebe,inset_-4px_-4px_8px_#ffffff]
        transition-all duration-200
      "
    >
      {icon && <div className="text-gray-600 text-3xl">{icon}</div>}
      <div className="flex flex-col items-start">
        <p className="font-semibold text-gray-800">{title}</p>
        <p className="text-gray-700">{value}</p>
      </div>
    </div>
  );
});

export default DetailsItem;
