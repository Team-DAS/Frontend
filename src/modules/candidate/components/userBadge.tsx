type BadgeProps = {
  bgColor?: string;
  text: string;
  subText?: string;
  userImg?: React.ReactNode;
  text_button?: string;
  onClickButton?: () => void;
};

export default function UserBadge({
  bgColor ,
  text,
  subText,
  userImg,
  text_button,
  onClickButton,
}: BadgeProps) {
  return (
    <div className={`flex items-center justify-between rounded-xl ${bgColor} text-white px-8 py-8`}>
      {/* Imagen usuario */}
      {userImg && <div className="w-12 h-12 rounded-full overflow-hidden">{userImg}</div>}

      {/* Texto principal + subtítulo */}
      <div className="flex-1 px-4">
        <p className="font-semibold">{text}</p>
        {subText && <p className="text-sm opacity-90">{subText}</p>}
      </div>

      {/* Botón */}
      {text_button && (
        <button
          onClick={onClickButton}
          className="bg-white text-red-500 font-medium px-4 py-2 rounded-md flex items-center gap-2"
        >
          {text_button} →
        </button>
      )}
    </div>
  );
}
