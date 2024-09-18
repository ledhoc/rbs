"use client";
import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import ProfileModal from "@/components/Profile/Modal";
import { useState } from "react";
import Card from "@/components/Profile/Card";
import profiles from "./ProfileData";

const Profile = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [profile, setProfile] = useState(undefined);

  const onClickCard = (data: any) => {
    setProfile(data);
    setIsOpen(true);
  };

  return (
    <>
      <ProfileModal isOpen={isOpen} setIsOpen={setIsOpen} data={profile} />
      <div className="mt-10 flex min-h-[500px] w-full flex-col justify-center  text-center md:ml-0 md:w-1/2">
        <div className="flex w-full flex-row justify-around">
          <Image
            src={"/images/whoweare/bg-avatar.png"}
            width={500}
            height={500}
            alt={"background-who-we-are"}
            className="position absolute -z-40"
          />
          <Card
            data={profiles.director}
            srcImage={"/images/whoweare/avatar-director.png"}
            alt={"avatar-director"}
            title={"Michael"}
            subTitle={"General Director/Founder"}
            onClick={onClickCard}
          />
          <Card
            data={profiles.ceo}
            srcImage={"/images/whoweare/avatar-ceo.png"}
            alt={"avatar-ceo"}
            title={"Tan Tran"}
            subTitle={"CEO/Cofounder"}
            onClick={onClickCard}
          />
        </div>
        <div className="flex flex-1 justify-center ">
          <Card
            data={profiles.coo}
            srcImage={"/images/whoweare/avatar-coo.png"}
            alt={"avatar-coo"}
            title={"Duyen Vo"}
            subTitle={"COO/Founder"}
            onClick={onClickCard}
          />
        </div>
      </div>
    </>
  );
};

export default Profile;
