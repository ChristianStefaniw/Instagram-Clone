import {Component} from "react";
import {Card} from "react-bootstrap";
import {FaChevronRight, FaChevronLeft} from "react-icons/all";

import './stories.css'
import ScrollMenu from "react-horizontal-scrolling-menu";
import Story from "./story";
import profileImg1 from '../../assets/profiles/2/profile.jpg'
import profileImg2 from '../../assets/profiles/3/profile.png'
import profileImg3 from '../../assets/profiles/4/profile.jpeg'


class Stories extends Component {

    render() {
        return (
            <Card id="stories">
                <ScrollMenu arrowLeft={<FaChevronLeft className="arrow"/>}
                            arrowRight={<FaChevronRight className="arrow"/>}
                            data={
                                [
                                    <Story img={profileImg1} user="squidward"/>,
                                    <Story img={profileImg2} user="someone"/>,
                                    <Story img={profileImg3} user="deadpool"/>,
                                    <Story img={profileImg1} user="squidward"/>,
                                    <Story img={profileImg2} user="someone"/>,
                                    <Story img={profileImg3} user="deadpool"/>,
                                    <Story img={profileImg1} user="squidward"/>,
                                    <Story img={profileImg2} user="someone"/>,
                                    <Story img={profileImg3} user="deadpool"/>
                                ]
                            }
                />
            </Card>
        );
    }
}

export default Stories
