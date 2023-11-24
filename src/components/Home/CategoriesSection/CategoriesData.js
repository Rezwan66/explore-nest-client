import { TbBeach, TbScubaMask, TbMountain } from 'react-icons/tb';
import { MdOutlineSportsBasketball } from "react-icons/md";
import { GiCactus, GiCastle, GiForestCamp, GiIsland, GiLion } from 'react-icons/gi';
import { FaHiking } from "react-icons/fa";

export const categories = [
    { name: "Sports", symbol: MdOutlineSportsBasketball },
    { name: "Beach", symbol: TbBeach },
    { name: "Hiking", symbol: FaHiking },
    { name: "Countryside", symbol: TbMountain },
    { name: "Wildlife", symbol: GiLion },
    { name: "Islands", symbol: GiIsland },
    { name: "Castles", symbol: GiCastle },
    { name: "Desert", symbol: GiCactus },
    { name: "Scuba Diving", symbol: TbScubaMask },
    { name: "Camping", symbol: GiForestCamp },
]