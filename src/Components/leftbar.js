import React from "react";
import MenuLink from "./MenuLink";
import "./leftbar.css";

export default function Leftbar() {
    return (
        <div className="leftbar">
            <div className="leftbarwrapper">
                <MenuLink text="Dashboard" />
                <MenuLink text="Albums" />
                <MenuLink text="Songs" />
                <MenuLink text="Artists" />
                <MenuLink text="Category" />
                <MenuLink text="Playlist" />
                <MenuLink text="Users" />
                <MenuLink text="Advertise" />
                <MenuLink text="Sections" />
                <MenuLink text="Reports" />
                <MenuLink text="Notification" />
            </div>
        </div>
    );
}