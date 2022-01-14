import React from "react";
import {
    GiAlmond,
    GiAmplitude,
    GiAppleSeeds,
    GiAbstract077,
    GiBackPain,
} from "react-icons/gi";

export const SideBar = () => {
    return (
        <div className="fixed left-0 top-0 h-screen w-16 m-0 flex flex-col bg-slate-900 text-white shadow-lg">
            <SideBarIcon icon={<GiAlmond size="32" />} />
            <SideBarIcon icon={<GiAmplitude size="32" />} />
            <SideBarIcon icon={<GiAppleSeeds size="32" />} />
            <SideBarIcon icon={<GiAbstract077 size="32" />} />
            <SideBarIcon icon={<GiBackPain size="32" />} />
        </div>
    );
};

const SideBarIcon = ({ icon }) => {
    return <div className="sidebar-icon  group">{icon}</div>;
};
