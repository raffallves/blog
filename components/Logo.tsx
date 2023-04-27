export default function Logo<Any>({ theme }) {
    return (
        <>
            <style jsx>{`

                .logo {
                    position: absolute;
                    left: 0;
                    right: 0;
                    margin-left: auto;
                    margin-right: auto;
                    z-index: 1;
                }

                .logo #V {
                    fill: ${theme};
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

                @import url('https://fonts.cdnfonts.com/css/monaco');

                #matrix {
                    margin: 1em auto;
                    font-family: 'Monaco', sans-serif;
                    font-size: .9em;
                    font-weight: bold;
                    width: 48px;
                    height: 100px;
                    overflow: hidden;
                    background: #000;
                    color: ${theme};
                    position: absolute;
                    left: 0;
                    right: 0;
                    top: 20px;
                    margin-left: auto;
                    margin-right: auto;	
                    border-top-right-radius: 90%;
                    border-top-left-radius: 100%;
                    border-bottom-left-radius: 70%;
                    border-bottom-right-radius: 70%;
                }

                @-webkit-keyframes fade {
                    0%   { opacity: 1; }
                    100% { opacity: 0; }
                }

                @-webkit-keyframes fall {
                    from { top: -250px; }
                    to 	{ top: 300px; }
                }
                
                
                #matrix div {
                    /* writing-mode: tb-rl; - ughh. doesn't work */
                    position: absolute;	
                    top: 0;
                    /* arrearance */
                    -webkit-transform-origin: 0%;
                    -webkit-transform: rotate(90deg); 
                    
                    /* animation */
                    -webkit-animation-name: fall, fade;			
                    -webkit-animation-iteration-count: infinite; /* use 0 to infinite */
                    -webkit-animation-direction: normal; /* default is normal. use 'alternate' to reverse direction */
                    -webkit-animation-timing-function: ease-out;
                }

                #matrix span {
                    color: ${theme};
                }

                .f1 {
                    font-size: 1px;
                }

                .f2 {
                    font-size: 1px;
                }

                .c1 {
                    color: ${theme};
                }

                .d1 {
                    -webkit-animation-duration: 5s;
                }
                
                .d2 {
                    -webkit-animation-duration: 6s;
                }

                .d3 {
                    -webkit-animation-duration: 8s;
                }

                .de {	
                    -webkit-animation-delay: 4s;
                }

                @media (prefers-reduced-motion) {
                    #matrix {
                        display: none;
                    }
                }

            `}</style>
            <svg className={'logo'} width="70" height="200" viewBox="-1 30 138 310" fill="none" xmlns="http://www.w3.org/2000/svg">
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
            <div id="matrix">	
                <div className="d1 c1 de" style={{left: 10}}>101<span>1</span>010101<span>0</span>101</div>
                <div className="d1 f2 c1" style={{left: 18}}>11<span>0</span>00101111000<span>0</span></div>
                <div className="d2 f1" style={{left: 20}}>1101<span>0</span>0101110010</div>
                <div className="d2 c1" style={{left: 25}}>0101011011100011010<span>0</span>10</div>
                <div className="d3 f2 c1" style={{left: 30}}>001<span>0</span>0101000</div>
                <div className="d1 c1" style={{left: 35}}>0101<span>001</span>111001<span>0</span>110</div>
                <div className="d3 de" style={{left: 45}}>11101<span>0</span>11</div>
            </div>
        </>
    )
}