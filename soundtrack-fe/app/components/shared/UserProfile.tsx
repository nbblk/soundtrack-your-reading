import Image from "next/image";

interface UserProfileProps {
  imgSrc: string;
}

export default function UserProfile({ imgSrc }: UserProfileProps) {
  return (
    <div className="w-[50px] h-[50px] circle border border-black">
      <Image
        src={imgSrc}
        alt="profile"
        width="50"
        height="50"
        className="w-max-[50px] h-max-[50px] w-auto h-auto"
      />
    </div>
  );
}
