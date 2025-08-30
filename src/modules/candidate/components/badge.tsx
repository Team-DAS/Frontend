type BadgeProps = {
  bgColor?: string;
  number: number;
  text: string;
  icon?: React.ReactNode;
};

export default function Badge({ bgColor = "bg-blue-50", number, text, icon }: BadgeProps) {
  return (
    <div className={`flex items-center justify-between p-4 rounded-xl ${bgColor}`}>
      
      <div>
        <p className="text-2xl font-bold">{number}</p>
        <p className="text-gray-600">{text}</p>
      </div>

      
      {icon && (
        <div className="p-3 bg-white rounded-lg shadow-sm">
          {icon}
        </div>
      )}
    </div>
  );
}
