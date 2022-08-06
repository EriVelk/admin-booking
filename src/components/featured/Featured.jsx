import React from 'react';
import "./Featured.scss";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";

const Featured = () => {
  return (
    <div className='featured'>
      <div className='top'>
        <h1 className='title'>Total Ingresos</h1>
        <MoreVertIcon fontSize='small'/>
      </div>
      <div className='bottom'>
        <div className='featuredChart'>
          <CircularProgressbar value={70} text={"70%"} strokeWidth={5}/>
        </div>
        <p className='title'>Total de ventas hoy</p>
        <p className='amount'>$150,259.00</p>
        <p className='desc'>
          Ultimas transacciones en proceso. Ultimos pagos no incluidos.
        </p>
        <div className='summary'>
          <div className='item'>
            <div className='itemTitle'>Objetivo</div>
            <div className='itemResult negative'>
              <KeyboardArrowDownIcon fontSize='small'/>
              <div className='resultAmount'>$124.15</div>
            </div>
          </div>
          <div className='item'>
            <div className='itemTitle'>Semana pasada</div>
            <div className='itemResult positive'>
              <KeyboardArrowUpOutlinedIcon fontSize='small'/>
              <div className='resultAmount'>$99.15</div>
            </div>
          </div>
          <div className='item'>
            <div className='itemTitle'>Mes pasado</div>
            <div className='itemResult positive'>
              <KeyboardArrowUpOutlinedIcon fontSize='small'/>
              <div className='resultAmount'>$550.15</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Featured