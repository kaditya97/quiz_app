import React from "react";
import logo from "../assets/images/logo.svg";
import { Button } from "@mui/material";

import NotFoundImg from '../assets/images/404.png';

export const NotFound = () => {
    return <div className="not-found">
        <div className="not-found__header">
            <a href="/">
                <div className="not-found__header--logos">
                    <img src={logo} alt="map-nepal-logo"/>
                    <div className="not-found__header--logos__title">
                        <h4>Quiz</h4>
                        <h6>quiz</h6>
                    </div>
                </div>
            </a>
            <div/>
        </div>
        <div className="not-found__body">
            <div className="not-found__body--content">
                <div className="not-found__body--content__header">
                    {/* <WarningFilled/> */}
                    <h3>This page is not available</h3>
                </div>
                <img src={NotFoundImg} alt="404"/>
                {/*<a href="/">*/}
                    <Button className="not-found__body--content--go-back"
                            type={"primary"}
                            href={'/'}>
                        Go to HomePage
                        {/* <ArrowRightOutlined/> */}
                    </Button>
                {/*</a>*/}
            </div>
        </div>
    </div>
}