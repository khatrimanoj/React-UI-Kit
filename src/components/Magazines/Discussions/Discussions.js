import React, { Component } from 'react';
import Card from '../Cardtags/card/card';
import Detail from '../Cardtags/carddetail/carddetail';
import Cardheading from '../Cardtags/Carddescription/cardheading';
import Button from '../../button/buttonprop/buttonprop';
import Avitar from '../../Notification/avitar/avitar-dropdown/avitar_dropdownhtml';



import { Icon } from 'react-icons-kit'
import { plus } from 'react-icons-kit/feather/plus'

import AvitarIcon from '../../../images/avitar.png';
import a1 from '../../../images/avitar/a1.png';
import a2 from '../../../images/avitar/a2.png';
import a3 from '../../../images/avitar/a3.png';
import a4 from '../../../images/avitar/a4.png';
import a5 from '../../../images/avitar/a5.png';
import a6 from '../../../images/avitar/a6.png';
import a7 from '../../../images/avitar/a7.png';
import a8 from '../../../images/avitar/a8.png';




class Discussions extends Component {
    render() {
        return (
            <>
                <div className="w-100 pull-left mb-30" ></div>
                <div className="col-md-12 mb-30">
                    <Card style="b1-solid b-white-smoke">
                        <Detail>
                            <div className="card-flex">
                                <div className="flex">
                                    <Cardheading heading="Discussions" />
                                </div>
                                <div className="flex">
                                    <Button
                                        size="btn-sm"
                                        style="btn-primary outline"
                                        label="Create topic"
                                        Lefticon={true}
                                        icon={<Icon icon={plus} />}
                                    />

                                </div>
                            </div>

                        </Detail>
                        <Detail style=" b1-solid b-white-smoke">
                            <div className="row">
                                <div className="col-md-4 mb-30">
                                    <Avitar title="10 things about your first job" subtitle="20 Jan by Benjamin Parker" avitar={AvitarIcon} hasRound haslg><img className="" src={AvitarIcon} /></Avitar>
                                </div>
                                <div className="col-md-4 mb-30">
                                    <Avitar title="Where To Buy A Diamond Enga..." subtitle="20 Jan by Benjamin Parker" avitar={AvitarIcon} hasRound haslg><img className="" src={a1} /></Avitar>
                                </div>
                                <div className="col-md-4 mb-30">
                                    <Avitar title="Doing Nothing Is The Secret To..." subtitle="20 Jan by Benjamin Parker" avitar={AvitarIcon} hasRound haslg><img className="" src={a2} /></Avitar>
                                 </div>
                                 <div className="col-md-4 mb-30">
                                    <Avitar title="How to get more likes on Faceb..." subtitle="20 Jan by Benjamin Parker" avitar={AvitarIcon} hasRound haslg><img className="" src={a3} /></Avitar>
                                </div>
                                <div className="col-md-4 mb-30">
                                    <Avitar title="Writing A Blog Post" subtitle="20 Jan by Benjamin Parker" avitar={AvitarIcon} hasRound haslg><img className="" src={a4} /></Avitar>
                                </div>
                                <div className="col-md-4 mb-30">
                                    <Avitar title="You should eat two oranges a d..." subtitle="20 Jan by Benjamin Parker" avitar={AvitarIcon} hasRound haslg><img className="" src={a5} /></Avitar>
                                 </div>
                                 <div className="col-md-4 mb-30">
                                    <Avitar title="Plan your life 90 days at a time" subtitle="20 Jan by Benjamin Parker" avitar={AvitarIcon} hasRound haslg><img className="" src={a6} /></Avitar>
                                </div>
                                <div className="col-md-4 mb-30">
                                    <Avitar title="Everything You Need To Know" subtitle="20 Jan by Benjamin Parker" avitar={AvitarIcon} hasRound haslg><img className="" src={a7} /></Avitar>
                                </div>
                                <div className="col-md-4 mb-30">
                                    <Avitar title="Why they are the best?" subtitle="20 Jan by Benjamin Parker" avitar={AvitarIcon} hasRound haslg><img className="" src={a8} /></Avitar>
                                 </div>
                                 
                            </div>
                        </Detail>
                        <Detail style=" b1-solid b-white-smoke">
                             <div className="d-flex justify-content-center">
                                     <Button
                                        size="btn"
                                        style="btn-primary text"
                                        label="Load more"
                                        
                                    />

                             </div>

                        </Detail>
                    </Card>
                </div>
                <div className="w-100 pull-left mb-30"></div>
                <div className="col-md-12 mb-30">
                    <Card style="b1-solid b-gray bg-dark text-white">
                        <Detail>
                            <div className="card-flex">
                                <div className="flex">
                                    <Cardheading heading="Discussions" />
                                </div>
                                <div className="flex">
                                    <Button
                                        size="btn-sm"
                                        style="btn-primary outline"
                                        label="Create topic"
                                        Lefticon={true}
                                        icon={<Icon icon={plus} />}
                                    />

                                </div>
                            </div>

                        </Detail>
                        <Detail style=" b1-solid b-gray">
                            <div className="row">
                                <div className="col-md-4 mb-30">
                                    <Avitar title="10 things about your first job" subtitle="20 Jan by Benjamin Parker" avitar={AvitarIcon} hasRound haslg><img className="" src={AvitarIcon} /></Avitar>
                                </div>
                                <div className="col-md-4 mb-30">
                                    <Avitar title="Where To Buy A Diamond Enga..." subtitle="20 Jan by Benjamin Parker" avitar={AvitarIcon} hasRound haslg><img className="" src={a1} /></Avitar>
                                </div>
                                <div className="col-md-4 mb-30">
                                    <Avitar title="Doing Nothing Is The Secret To..." subtitle="20 Jan by Benjamin Parker" avitar={AvitarIcon} hasRound haslg><img className="" src={a2} /></Avitar>
                                 </div>
                                 <div className="col-md-4 mb-30">
                                    <Avitar title="How to get more likes on Faceb..." subtitle="20 Jan by Benjamin Parker" avitar={AvitarIcon} hasRound haslg><img className="" src={a3} /></Avitar>
                                </div>
                                <div className="col-md-4 mb-30">
                                    <Avitar title="Writing A Blog Post" subtitle="20 Jan by Benjamin Parker" avitar={AvitarIcon} hasRound haslg><img className="" src={a4} /></Avitar>
                                </div>
                                <div className="col-md-4 mb-30">
                                    <Avitar title="You should eat two oranges a d..." subtitle="20 Jan by Benjamin Parker" avitar={AvitarIcon} hasRound haslg><img className="" src={a5} /></Avitar>
                                 </div>
                                 <div className="col-md-4 mb-30">
                                    <Avitar title="Plan your life 90 days at a time" subtitle="20 Jan by Benjamin Parker" avitar={AvitarIcon} hasRound haslg><img className="" src={a6} /></Avitar>
                                </div>
                                <div className="col-md-4 mb-30">
                                    <Avitar title="Everything You Need To Know" subtitle="20 Jan by Benjamin Parker" avitar={AvitarIcon} hasRound haslg><img className="" src={a7} /></Avitar>
                                </div>
                                <div className="col-md-4 mb-30">
                                    <Avitar title="Why they are the best?" subtitle="20 Jan by Benjamin Parker" avitar={AvitarIcon} hasRound haslg><img className="" src={a8} /></Avitar>
                                 </div>
                                 
                            </div>
                        </Detail>
                        <Detail style=" b1-solid b-gray">
                             <div className="d-flex justify-content-center">
                                     <Button
                                        size="btn"
                                        style="btn-primary text"
                                        label="Load more"
                                        
                                    />

                             </div>

                        </Detail>
                    </Card>
                </div>
            </>
        );
    }
}

export default Discussions;