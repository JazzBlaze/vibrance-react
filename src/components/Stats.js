import './Stats.css';
import CountUp from 'react-countup';
import {AppearSensor} from "./AppearSensor";

function Stats (){
    return (
        <>
        <div className='stats'>
            <div className='stats-container'>
                <div className='stats-comp'>
                    <AppearSensor>
                        {({ hasBeenVisible }) =>
                            hasBeenVisible
                                ? <CountUp className='stats-comp_h1' start={0} end={50} suffix={'+'} enableScrollSpy /> : <span className='stats-comp_h1'>0</span>
                        }
                    </AppearSensor>
                    <p>EVENTS</p>
                </div>
                <div className='stats-comp'>
                    <AppearSensor>
                        {({ hasBeenVisible }) =>
                            hasBeenVisible
                                ? <CountUp className='stats-comp_h1' start={0} end={9} enableScrollSpy /> : <span className='stats-comp_h1'>0</span>
                        }
                    </AppearSensor>
                    <p>SPECTACULAR PRO-SHOWS</p>
                </div>
                <div className='stats-comp'>
                    <AppearSensor>
                        {({ hasBeenVisible }) =>
                            hasBeenVisible
                                ? <CountUp className='stats-comp_h1' start={0} end={20} enableScrollSpy /> : <span className='stats-comp_h1'>500</span>
                        }
                    </AppearSensor>
                    <p>PARTICIPANTS</p>
                </div>
            </div>
        </div>

        </>
    )

}

export default Stats