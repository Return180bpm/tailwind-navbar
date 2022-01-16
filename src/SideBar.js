import React from "react";
import {
    GiAlmond,
    GiAmplitude,
    GiAppleSeeds,
    GiAbstract077,
    GiBackPain,
    Gi3DStairs,
} from "react-icons/gi";

export const SideBar = () => {
    return (
        <div className="fixed left-0 top-0 h-screen w-16 m-0 flex flex-col bg-slate-900 text-white shadow-lg">
            {/* 
            FIX: Toolbar jankiness
            1. Make mouseout animation faster
            2. give id to tooltip, counter the animation
            3. make it so animation cannot be retriggered once it started
            */}
            <SideBarIcon icon={<GiAlmond size="32" />} />
            <SideBarIcon icon={<GiAmplitude size="32" />} />
            <SideBarIcon icon={<GiAppleSeeds size="32" />} />
            <SideBarIcon icon={<GiAbstract077 size="32" />} />
            <SideBarIcon icon={<GiBackPain size="32" />} />
            <SideBarIcon icon={<Gi3DStairs size="32" />} />
        </div>
    );
};

const SideBarIcon = ({ icon, text = "tooltip 💡" }) => {
    return (
        <div className="sidebar-icon  group after:absolute  after:h-3/6 after:w-6/12 after:left-full ">
            {icon}
            <span className="sidebar-tooltip group-hover:scale-100 ">
                {text}{" "}
            </span>
        </div>
    );
};
