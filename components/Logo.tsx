import Link from 'next/link'

export default function Logo<Any>() {

    return (
        <>
            <style jsx>{`
                .logo {
                    position: relative;
                }

                .logo #V {
                    fill: #f00;
                }

                .logo #A {
                    fill: #fff;
                }

                .logo .handles {
                    stroke: #000;
                    stroke-width: 3.64898;
                }

                .logo .contour {
                    stroke: #000;
                    stroke-width: 3.17303;
                }
                
                .logo .contour #inner {
                    fill: transparent;
                }

                svg {
                    border: none;
                    border-radius: 70%;
                }
                @font-face {
                    font-family: "Monaco";
                    src: url('https://fonts.cdnfonts.com/css/monaco');
                }
                
                #matrix {
                    margin: 1em auto;
                    font-family: "Monaco", sans-serif;
                    width: 100px;
                    height: 200px;
                    overflow: hidden;
                    background: #000;
                    background-image: -webkit-gradient(linear, 0% 90%, 0% 100%, from(rgba(0, 255, 0, 0)), to(rgba(0, 255, 0, 0.1)));
                    color: #f00;
                    text-shadow: #f00 0px 0px 4px;
                    position: relative;	
                    border-radius: 60%;
                    line-height: 0.4em;
                }
                
                @keyframes fade {
                
                    0%   { 
                        opacity: 1; 
                    }
                
                    100% { 
                        opacity: 0; 
                    }
                }
                
                @keyframes fall {
                
                    from {
                        top: -300px;
                    }
                
                    to 	{
                        top: 400px;
                    }
                }
                
                
                #matrix div {
                    /* writing-mode: tb-rl; - ughh. doesn't work */
                    position: absolute;	
                    top: 0;
                    /* arrearance */
                    transform-origin: 0%;
                    /* -webkit-transform: rotate(90deg);  */
                    
                    /* animation */
                    animation-name: fall, fade;			
                    animation-iteration-count: infinite; /* use 0 to infinite */
                    animation-direction: normal; /* default is normal. use 'alternate' to reverse direction */
                    animation-timing-function: ease-out;
                }
                
                #matrix span {
                    color: #f00;
                    text-shadow: #f00 0px 0px 5px;
                }
                
                .f1 {
                    font-size: 0.4em;
                }
                
                .f2 {
                    font-size: .2em;
                }
                
                .c1 {
                    color: #f00;
                }
                
                .d1 {
                    animation-duration: 4s;
                }
                
                .d2 {
                    animation-duration: 5s;
                }
                
                .d3 {
                    animation-duration: 6s;
                }
                
                .d4 {
                    animation-duration: 8s;
                }
                
                .de {	
                    animation-delay: 3s;
                    animation-fill-mode: backwards;
                }

            `}</style>
            <Link href={'/'}>
                <a>
                    <svg className={'logo'} width="70" height="200" viewBox="-1 30 138 310" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <foreignObject x='19' y='58' width='100' height='200'>
                            <div id="matrix">	
                                <div className="d1 c1 de" style={{left: "0px"}}>
                                    <p>0</p>
                                    <p>1</p>
                                    <p><span>1</span></p>
                                    <p>0</p>
                                    <p>0</p>
                                    <p>0</p>
                                    <p>1</p>
                                </div>
                                <div className="d3 f1" style={{left: "5px"}}>
                                    <p>1</p>
                                    <p><span>0</span></p>
                                    <p>1</p>
                                    <p>1</p>
                                    <p>1</p>
                                    <p>0</p>
                                </div>
                                <div className="d1 f2 c1" style={{left: "10px"}}>
                                    <p>0</p>
                                    <p>1</p>
                                    <p>0</p>
                                    <p>0</p>
                                    <p><span>0</span></p>
                                    <p>1</p>
                                </div>
                                <div className="d2 f1" style={{left: "15px"}}>
                                    <p>1</p>
                                    <p><span>1</span></p>
                                    <p>0</p>
                                    <p>1</p>
                                    <p>1</p>
                                </div>
                                <div className="d4 c3 de" style={{left: "20px"}}>
                                    <p><span>0</span></p>
                                    <p>1</p>
                                    <p>0</p>
                                    <p>1</p>
                                    <p><span>1</span></p>
                                    <p>1</p>
                                    <p>0</p>
                                </div>
                                <div className="d2 c1" style={{left: "25px"}}>
                                    <p>1</p>
                                    <p><span>0</span></p>
                                    <p>0</p>
                                    <p>1</p>
                                    <p><span>0</span></p>
                                    <p>1</p>
                                </div>
                                <div className="d3 f2 c1" style={{left: "30px"}}>
                                    <p>1</p>
                                    <p><span>0</span></p>
                                    <p>1</p>
                                    <p>0</p>
                                    <p>0</p>
                                    <p><span>0</span></p>
                                </div>
                                <div className="d1 c1" style={{left: "35px"}}>
                                    <p>1</p>
                                    <p><span>1</span></p>
                                    <p>0</p>
                                    <p>0</p>
                                    <p>1</p>
                                </div>
                                <div className="d3 de" style={{left: "40px"}}>
                                    <p>0</p>
                                    <p>1</p>
                                    <p><span>1</span></p>
                                    <p>1</p>
                                    <p>0</p>
                                </div>
                                <div className="d4 f1" style={{left: "45px"}}>
                                    <p>0</p>
                                    <p>1</p>
                                    <p>1</p>
                                    <p><span>1</span></p>
                                    <p>0</p>
                                </div>
                                <div className="d2 de" style={{left: "50px"}}>
                                    <p><span>1</span></p>
                                    <p>0</p>
                                    <p>0</p>
                                    <p>1</p>
                                    <p>0</p>
                                </div>
                                <div className="d3 f2" style={{left: "55px"}}>
                                    <p>0</p>
                                    <p>0</p>
                                    <p><span>1</span></p>
                                    <p>1</p>
                                    <p>1</p>
                                    <p>0</p>
                                    <p><span>1</span></p>
                                    <p>0</p>
                                </div>
                                <div className="d1 f1" style={{left: "60px"}}>
                                    <p><span>0</span></p>
                                    <p>0</p>
                                    <p>1</p>
                                    <p>1</p>
                                    <p>1</p>
                                    <p>0</p>
                                    <p><span>1</span></p>
                                </div>
                                <div className="d4 c1" style={{left: "65px"}}>
                                    <p>0</p>
                                    <p>1</p>
                                    <p>0</p>
                                    <p>1</p>
                                    <p>0</p>
                                    <p><span>1</span></p>
                                    <p>1</p>
                                </div>
                                <div className="d2 de" style={{left: "70px"}}>
                                    <p>1</p>
                                    <p>0</p>
                                    <p>1</p>
                                    <p><span>0</span></p>
                                    <p>1</p>
                                    <p>0</p>
                                    <p>0</p>
                                    <p>1</p>
                                </div>
                                <div className="d1 c1 de" style={{left: "75px"}}>
                                    <p>0</p>
                                    <p>1</p>
                                    <p><span>0</span></p>
                                    <p>1</p>
                                    <p>1</p>
                                    <p>0</p>
                                    <p>1</p>
                                    <p><span>0</span></p>
                                    <p>1</p>
                                </div>
                            </div>
                        </foreignObject>
                        <path id={'V'} d="M69.4932 306.314L2.25546 190.11C2.25546 190.11 7.68516 195.974 15.0569 190.684C22.9836 184.997 27.9774 187.157 27.9774 187.157L69.6517 259.21L111.385 187.058C111.385 187.058 118.103 184.502 122.661 189.674C128.368 197.977 135.859 190.11 135.859 190.11L69.4932 306.314Z"/>
                        <path id={'A'} d="M69.3943 5.02832L135.859 189.937C135.859 189.937 129.795 197.844 123.196 190.313C117.782 184.135 111.346 187.163 111.346 187.163L69.5726 72.8011L27.8389 187.163C27.8389 187.163 21.6759 185.46 15.295 190.551C7.94302 196.417 1.99805 189.937 1.99805 189.937L69.3943 5.02832Z"/>
                        <g className={'handles'}>
                            <path id={'right-handle'} d="M111.332 187.111C111.332 187.111 118.466 184.25 123.618 190.813C128.771 197.376 135.675 189.585 135.675 189.585"/>
                            <path id={'left-handle'} d="M2.09766 189.129C2.09766 189.129 7.47361 196.314 15.0535 190.716C22.6333 185.118 27.8451 187.258 27.8451 187.258"/>
                        </g>
                        <g className={'contour'}>
                            <path id={'outer'} d="M69.4141 4.99902L1.99805 189.868L69.4141 306.429L135.998 189.888L69.4141 4.99902Z"/>
                            <path id={'inner'} d="M27.9277 187.176L69.602 259.368L111.336 187.176L69.602 72.6953L27.9277 187.176Z"/>
                        </g>
                    </svg>
                </a>
            </Link>
        </>
    )
}