/**************************************************************************
 * Main
 * 
 * @author (Anyanwu Benedict Chukwuemeka)
 * @version (v0)
 * 
 **************************************************************************/


    const preldrSpinnerStruct = 
    `
        <div class="preldr-spinner-bdr">
            <div class="preldr-spinner-box"></div>
        </div>
    `;

    const main_struct = 
    `
            <div class="app-bdr">
                <div class="app-box">
                    <div class="app-logo-bdr">
                        <div class="app-logo-box">
                            <div class="img_preload_box">
                                <div class="img_preload_sibling"></div>
                                <img loading="lazy" 
                                    onload="if(!(this.parentElement.classList.contains('loaded'))) this.parentElement.classList.add('loaded')" 
                                    onerror="if(!(this.parentElement.classList.contains('loaderror'))) this.parentElement.classList.add('loaderror')"
                                    src="/images/uvid-logo.png" alt="Logo image of ACUvid" class="app-logo-img"
                                >
                            </div>
                        </div>
                    </div>
                    <div class="app-det-bdr">
                        <div class="app-det-box">
                            <div class="app-ttl-bdr">
                                <div class="app-ttl-box">
                                    <div class="app-ttl-main-box">
                                        <p class="app-ttl-main-txt logo-name">
                                            <span class="mjr">AC</span>
                                            <span class="mnr">UVID</span>
                                        </p>
                                    </div>
                                    <div class="app-ttl-sub-box">
                                        <p class="app-ttl-sub-txt">Simulated streaming experience</p>
                                    </div>
                                </div>
                            </div>
                            <div class="app-nav-bdr">
                                <div class="app-nav-box">
                                    <ul class="app-nav-list">
                                        <li class="app-nav-item">
                                            <button type="button" data-nav="desc" class="app-nav-btn" title="View details about the ACUvid project">
                                                <span class="app-nav-txt">Overview</span>
                                            </button>
                                        </li>
                                        <li class="app-nav-item">
                                            <button type="button" data-nav="vrsn" class="app-nav-btn" title="View all versions of the ACUvid project">
                                                <span class="app-nav-txt">Versions</span>
                                            </button>
                                        </li>
                                        <li class="app-nav-item">
                                            <button type="button" data-nav="ctnb" class="app-nav-btn" title="View author(s) of the ACUvid project">
                                                <span class="app-nav-txt">Contributors</span>
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="app-ctnt-bdr">
                                <div class="app-ctnt-box">${preldrSpinnerStruct}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    `;


    const abt_text = 
    `
        Hi, thanks for stopping by.
        <br><br>
        ACUvid (or Uvid) is a web app project which simulates the user experience and interface of a modern streaming service.
        With its sleek and modern design, it aims to be practical, giving users an opportunity 
        to experience near identical scenarios they would undergo on actual streaming services.
        <br><br>
        I started this project as a means to get more familiar with the concepts of HTML, CSS, and JavaScript; 
        the end goal originally being to remake the UI of a flight entertainment system. 
        As time went on, I shifted my focus from flight entertainment systems to streaming services.
        <br><br>
        You can view the most recent version 
        <button onclick="window.open('/?v=latest')" class="app-desc-txt-lnk" title="View the latest version of ACUvid">here</button>
        or check the "Versions" tab above to see other versions.
        <br><br>
        Star this project on GitHub by clicking 
        <button onclick="window.open('/?v=0')" class="app-desc-txt-lnk" title="View all verison ACUvid">here</button>.
    `;

    const abt_lang = 
    [
        `
            <svg class="app-tech-icon-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 361 361">
                <path fill="#e44d26" d="m255.555 70.766l-23.241 260.36l-104.47 28.962l-104.182-28.922L.445 70.766z" />
                <path fill="#f16529" d="m128 337.95l84.417-23.403l19.86-222.49H128z" />
                <path fill="#ebebeb" d="M82.82 155.932H128v-31.937H47.917l.764 8.568l7.85 88.01H128v-31.937H85.739zm7.198 80.61h-32.06l4.474 50.146l65.421 18.16l.147-.04V271.58l-.14.037l-35.568-9.604z" />
                <path d="M24.18 0h16.23v16.035h14.847V0h16.231v48.558h-16.23v-16.26H40.411v16.26h-16.23V0M92.83 16.103H78.544V0h44.814v16.103h-14.295v32.455h-16.23V16.103zM130.47 0h16.923l10.41 17.062L168.203 0h16.93v48.558h-16.164V24.49l-11.166 17.265h-.28L146.35 24.49v24.068h-15.88zm62.74 0h16.235v32.508h22.824v16.05h-39.06z" />
                <path fill="#fff" d="M127.89 220.573h39.327l-3.708 41.42l-35.62 9.614v33.226l65.473-18.145l.48-5.396l7.506-84.08l.779-8.576H127.89zm0-64.719v.078h77.143l.64-7.178l1.456-16.191l.763-8.568H127.89z" />
            </svg>
        `,
        `
            <svg class="app-tech-icon-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 361 361">
                <path fill="#264de4" d="M127.844 360.088L23.662 331.166L.445 70.766h255.11l-23.241 260.36z" />
                <path fill="#2965f1" d="m212.417 314.547l19.86-222.49H128V337.95z" />
                <path fill="#ebebeb" d="m53.669 188.636l2.862 31.937H128v-31.937zm-5.752-64.641l2.903 31.937H128v-31.937zM128 271.58l-.14.037l-35.568-9.604l-2.274-25.471h-32.06l4.474 50.146l65.421 18.16l.147-.04z" />
                <path d="M60.484 0h38.68v16.176H76.66v16.176h22.506v16.175H60.484zm46.417 0h38.681v14.066h-22.505v2.813h22.505v32.352h-38.68V34.46h22.505v-2.813H106.9zm46.418 0H192v14.066h-22.505v2.813H192v32.352h-38.681V34.46h22.505v-2.813H153.32z" />
                <path fill="#fff" d="m202.127 188.636l5.765-64.641H127.89v31.937h45.002l-2.906 32.704H127.89v31.937h39.327l-3.708 41.42l-35.62 9.614v33.226l65.473-18.145l.48-5.396l7.506-84.08z" />
            </svg>
        `,
        `
            <svg class="app-tech-icon-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
                <path fill="#f7df1e" d="M0 0h256v256H0z" />
                <path d="m67.312 213.932l19.59-11.856c3.78 6.701 7.218 12.371 15.465 12.371c7.905 0 12.89-3.092 12.89-15.12v-81.798h24.057v82.138c0 24.917-14.606 36.259-35.916 36.259c-19.245 0-30.416-9.967-36.087-21.996m85.07-2.576l19.588-11.341c5.157 8.421 11.859 14.607 23.715 14.607c9.969 0 16.325-4.984 16.325-11.858c0-8.248-6.53-11.17-17.528-15.98l-6.013-2.58c-17.357-7.387-28.87-16.667-28.87-36.257c0-18.044 13.747-31.792 35.228-31.792c15.294 0 26.292 5.328 34.196 19.247l-18.732 12.03c-4.125-7.389-8.591-10.31-15.465-10.31c-7.046 0-11.514 4.468-11.514 10.31c0 7.217 4.468 10.14 14.778 14.608l6.014 2.577c20.45 8.765 31.963 17.7 31.963 37.804c0 21.654-17.012 33.51-39.867 33.51c-22.339 0-36.774-10.654-43.819-24.574" />
            </svg>
        `,
    ];

    const abt_tools = 
    [
        `
            <svg class="app-tech-icon-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
                <defs>
                    <linearGradient id="logosVisualStudioCode0" x1="50%" x2="50%" y1="0%" y2="100%">
                        <stop offset="0%" stop-color="#fff" />
                        <stop offset="100%" stop-color="#fff" stop-opacity="0" />
                    </linearGradient>
                    <path id="logosVisualStudioCode1" d="M180.828 252.605a15.87 15.87 0 0 0 12.65-.486l52.501-25.262a15.94 15.94 0 0 0 9.025-14.364V41.197a15.94 15.94 0 0 0-9.025-14.363l-52.5-25.263a15.88 15.88 0 0 0-18.115 3.084L74.857 96.35l-43.78-33.232a10.614 10.614 0 0 0-13.56.603L3.476 76.494c-4.63 4.211-4.635 11.495-.012 15.713l37.967 34.638l-37.967 34.637c-4.623 4.219-4.618 11.502.012 15.714l14.041 12.772a10.614 10.614 0 0 0 13.56.604l43.78-33.233l100.507 91.695a15.85 15.85 0 0 0 5.464 3.571m10.464-183.649l-76.262 57.889l76.262 57.888z" />
                </defs>
                <mask id="logosVisualStudioCode2" fill="#fff">
                    <use href="#logosVisualStudioCode1" />
                </mask>
                <title>Visual Studio Code</title>
                <path fill="#0065a9" d="M246.135 26.873L193.593 1.575a15.885 15.885 0 0 0-18.123 3.08L3.466 161.482c-4.626 4.219-4.62 11.502.012 15.714l14.05 12.772a10.625 10.625 0 0 0 13.569.604L238.229 33.436c6.949-5.271 16.93-.315 16.93 8.407v-.61a15.94 15.94 0 0 0-9.024-14.36" mask="url(#logosVisualStudioCode2)" />
                <path fill="#007acc" d="m246.135 226.816l-52.542 25.298a15.89 15.89 0 0 1-18.123-3.08L3.466 92.207c-4.626-4.218-4.62-11.502.012-15.713l14.05-12.773a10.625 10.625 0 0 1 13.569-.603l207.132 157.135c6.949 5.271 16.93.315 16.93-8.408v.611a15.94 15.94 0 0 1-9.024 14.36" mask="url(#logosVisualStudioCode2)" />
                <path fill="#1f9cf0" d="M193.428 252.134a15.89 15.89 0 0 1-18.125-3.083c5.881 5.88 15.938 1.715 15.938-6.603V11.273c0-8.318-10.057-12.483-15.938-6.602a15.89 15.89 0 0 1 18.125-3.084l52.533 25.263a15.94 15.94 0 0 1 9.03 14.363V212.51c0 6.125-3.51 11.709-9.03 14.363z" mask="url(#logosVisualStudioCode2)" />
                <path fill="url(#logosVisualStudioCode0)" fill-opacity="0.25" d="M180.828 252.605a15.87 15.87 0 0 0 12.65-.486l52.5-25.263a15.94 15.94 0 0 0 9.026-14.363V41.197a15.94 15.94 0 0 0-9.025-14.363L193.477 1.57a15.88 15.88 0 0 0-18.114 3.084L74.857 96.35l-43.78-33.232a10.614 10.614 0 0 0-13.56.603L3.476 76.494c-4.63 4.211-4.635 11.495-.012 15.713l37.967 34.638l-37.967 34.637c-4.623 4.219-4.618 11.502.012 15.714l14.041 12.772a10.614 10.614 0 0 0 13.56.604l43.78-33.233l100.506 91.695a15.9 15.9 0 0 0 5.465 3.571m10.464-183.65l-76.262 57.89l76.262 57.888z" mask="url(#logosVisualStudioCode2)" />
            </svg>
        `,
        `
            <svg class="app-tech-icon-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
                <title>Git</title>
                <path fill="#de4c36" d="M251.172 116.594L139.4 4.828c-6.433-6.437-16.873-6.437-23.314 0l-23.21 23.21l29.443 29.443c6.842-2.312 14.688-.761 20.142 4.693c5.48 5.489 7.02 13.402 4.652 20.266l28.375 28.376c6.865-2.365 14.786-.835 20.269 4.657c7.663 7.66 7.663 20.075 0 27.74c-7.665 7.666-20.08 7.666-27.749 0c-5.764-5.77-7.188-14.235-4.27-21.336l-26.462-26.462l-.003 69.637a19.8 19.8 0 0 1 5.188 3.71c7.663 7.66 7.663 20.076 0 27.747c-7.665 7.662-20.086 7.662-27.74 0c-7.663-7.671-7.663-20.086 0-27.746a19.7 19.7 0 0 1 6.421-4.281V94.196a19.4 19.4 0 0 1-6.421-4.281c-5.806-5.798-7.202-14.317-4.227-21.446L81.47 39.442L4.83 116.077c-6.44 6.443-6.44 16.884 0 23.322l111.774 111.768c6.435 6.438 16.873 6.438 23.316 0l111.251-111.249c6.438-6.44 6.438-16.887 0-23.324" />
            </svg>
        `,
        `
            <div class="app-tech-icon-box">
                <svg class="app-tech-icon-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
                    <title>GitHub</title>
                    <path fill="#fff" d="M128.001 0C57.317 0 0 57.307 0 128.001c0 56.554 36.676 104.535 87.535 121.46c6.397 1.185 8.746-2.777 8.746-6.158c0-3.052-.12-13.135-.174-23.83c-35.61 7.742-43.124-15.103-43.124-15.103c-5.823-14.795-14.213-18.73-14.213-18.73c-11.613-7.944.876-7.78.876-7.78c12.853.902 19.621 13.19 19.621 13.19c11.417 19.568 29.945 13.911 37.249 10.64c1.149-8.272 4.466-13.92 8.127-17.116c-28.431-3.236-58.318-14.212-58.318-63.258c0-13.975 5-25.394 13.188-34.358c-1.329-3.224-5.71-16.242 1.24-33.874c0 0 10.749-3.44 35.21 13.121c10.21-2.836 21.16-4.258 32.038-4.307c10.878.049 21.837 1.47 32.066 4.307c24.431-16.56 35.165-13.12 35.165-13.12c6.967 17.63 2.584 30.65 1.255 33.873c8.207 8.964 13.173 20.383 13.173 34.358c0 49.163-29.944 59.988-58.447 63.157c4.591 3.972 8.682 11.762 8.682 23.704c0 17.126-.148 30.91-.148 35.126c0 3.407 2.304 7.398 8.792 6.14C219.37 232.5 256 184.537 256 128.002C256 57.307 198.691 0 128.001 0m-80.06 182.34c-.282.636-1.283.827-2.194.39c-.929-.417-1.45-1.284-1.15-1.922c.276-.655 1.279-.838 2.205-.399c.93.418 1.46 1.293 1.139 1.931m6.296 5.618c-.61.566-1.804.303-2.614-.591c-.837-.892-.994-2.086-.375-2.66c.63-.566 1.787-.301 2.626.591c.838.903 1 2.088.363 2.66m4.32 7.188c-.785.545-2.067.034-2.86-1.104c-.784-1.138-.784-2.503.017-3.05c.795-.547 2.058-.055 2.861 1.075c.782 1.157.782 2.522-.019 3.08m7.304 8.325c-.701.774-2.196.566-3.29-.49c-1.119-1.032-1.43-2.496-.726-3.27c.71-.776 2.213-.558 3.315.49c1.11 1.03 1.45 2.505.701 3.27m9.442 2.81c-.31 1.003-1.75 1.459-3.199 1.033c-1.448-.439-2.395-1.613-2.103-2.626c.301-1.01 1.747-1.484 3.207-1.028c1.446.436 2.396 1.602 2.095 2.622m10.744 1.193c.036 1.055-1.193 1.93-2.715 1.95c-1.53.034-2.769-.82-2.786-1.86c0-1.065 1.202-1.932 2.733-1.958c1.522-.03 2.768.818 2.768 1.868m10.555-.405c.182 1.03-.875 2.088-2.387 2.37c-1.485.271-2.861-.365-3.05-1.386c-.184-1.056.893-2.114 2.376-2.387c1.514-.263 2.868.356 3.061 1.403" />
                </svg>
            </div>
        `,
        `
            <svg class="app-tech-icon-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
                <title>Netlify</title>
                <path fill="#05bdba" d="M69.181 188.087h-2.417l-12.065-12.065v-2.417l18.444-18.444h12.778l1.704 1.704v12.778zM54.699 51.628v-2.417l12.065-12.065h2.417L87.625 55.59v12.778l-1.704 1.704H73.143z" />
                <path fill="#014847" d="M160.906 149.198h-17.552l-1.466-1.466v-41.089c0-7.31-2.873-12.976-11.689-13.174c-4.537-.119-9.727 0-15.274.218l-.833.852v53.173l-1.466 1.466H95.074l-1.466-1.466v-70.19l1.466-1.467h39.503c15.354 0 27.795 12.441 27.795 27.795v43.882z" />
                <path fill="#05bdba" d="M71.677 122.889H1.466L0 121.423V103.83l1.466-1.466h70.211l1.466 1.466v17.593zm182.857 0h-70.211l-1.466-1.466V103.83l1.466-1.466h70.211L256 103.83v17.593zM117.876 54.124V1.466L119.342 0h17.593l1.466 1.466v52.658l-1.466 1.466h-17.593zm0 169.663v-52.658l1.466-1.466h17.593l1.466 1.466v52.658l-1.466 1.465h-17.593z" />
            </svg>
        `,
        `
            <svg class="app-tech-icon-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 322 322">
                <title>Firebase</title>
                <path fill="#ff9100" d="M80.18 312.295c13.455 5.414 28.05 8.628 43.376 9.163a127.5 127.5 0 0 0 58.098-11.71c-21.145-8.307-40.294-20.455-56.638-35.56c-10.594 16.963-26.263 30.36-44.835 38.107" />
                <path fill="#ffc400" d="M125.013 274.193c-37.307-34.504-59.939-84.444-58.026-139.218c.062-1.78.156-3.557.266-5.334a96.63 96.63 0 0 0-50.456.528C6.838 147.614.828 167.63.079 189.069C-1.853 244.403 31.632 292.75 80.178 312.3c18.572-7.747 34.24-21.13 44.835-38.107" />
                <path fill="#ff9100" d="M125.015 274.191c8.674-13.88 13.933-30.154 14.545-47.687c1.61-46.12-29.394-85.794-72.306-96.865c-.11 1.777-.203 3.555-.265 5.334c-1.913 54.775 20.719 104.714 58.026 139.218" />
                <path fill="#dd2c00" d="M134.761 0c-24.44 19.58-43.738 45.396-55.414 75.136a180.5 180.5 0 0 0-12.113 54.515c42.912 11.07 73.917 50.745 72.306 96.865c-.612 17.532-5.887 33.79-14.545 47.687a180.7 180.7 0 0 0 56.637 35.56c42.441-19.618 72.553-61.833 74.297-111.764c1.129-32.351-11.3-61.184-28.864-85.521C208.517 86.738 134.76 0 134.76 0" />
            </svg>
        `,
        `
            <svg class="app-tech-icon-svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 190.24 81.52">
                <defs>
                    <style>
                        .cls-1 {
                            fill: url(#linear-gradient);
                        }
                    </style>
                    <linearGradient id="linear-gradient" y1="40.76" x2="190.24" y2="40.76" gradientUnits="userSpaceOnUse">
                        <stop offset="0" stop-color="#90cea1" />
                        <stop offset="0.56" stop-color="#3cbec9" />
                        <stop offset="1" stop-color="#00b3e5" />
                    </linearGradient>
                </defs>
                <title>The Movie Database</title>
                <g id="Layer_2" data-name="Layer 2">
                    <g id="Layer_1-2" data-name="Layer 1">
                        <path class="cls-1"
                            d="M105.67,36.06h66.9A17.67,17.67,0,0,0,190.24,18.4h0A17.67,17.67,0,0,0,172.57.73h-66.9A17.67,17.67,0,0,0,88,18.4h0A17.67,17.67,0,0,0,105.67,36.06Zm-88,45h76.9A17.67,17.67,0,0,0,112.24,63.4h0A17.67,17.67,0,0,0,94.57,45.73H17.67A17.67,17.67,0,0,0,0,63.4H0A17.67,17.67,0,0,0,17.67,81.06ZM10.41,35.42h7.8V6.92h10.1V0H.31v6.9h10.1Zm28.1,0h7.8V8.25h.1l9,27.15h6l9.3-27.15h.1V35.4h7.8V0H66.76l-8.2,23.1h-.1L50.31,0H38.51ZM152.43,55.67a15.07,15.07,0,0,0-4.52-5.52,18.57,18.57,0,0,0-6.68-3.08,33.54,33.54,0,0,0-8.07-1h-11.7v35.4h12.75a24.58,24.58,0,0,0,7.55-1.15A19.34,19.34,0,0,0,148.11,77a16.27,16.27,0,0,0,4.37-5.5,16.91,16.91,0,0,0,1.63-7.58A18.5,18.5,0,0,0,152.43,55.67ZM145,68.6A8.8,8.8,0,0,1,142.36,72a10.7,10.7,0,0,1-4,1.82,21.57,21.57,0,0,1-5,.55h-4.05v-21h4.6a17,17,0,0,1,4.67.63,11.66,11.66,0,0,1,3.88,1.87A9.14,9.14,0,0,1,145,59a9.87,9.87,0,0,1,1,4.52A11.89,11.89,0,0,1,145,68.6Zm44.63-.13a8,8,0,0,0-1.58-2.62A8.38,8.38,0,0,0,185.63,64a10.31,10.31,0,0,0-3.17-1v-.1a9.22,9.22,0,0,0,4.42-2.82,7.43,7.43,0,0,0,1.68-5,8.42,8.42,0,0,0-1.15-4.65,8.09,8.09,0,0,0-3-2.72,12.56,12.56,0,0,0-4.18-1.3,32.84,32.84,0,0,0-4.62-.33h-13.2v35.4h14.5a22.41,22.41,0,0,0,4.72-.5,13.53,13.53,0,0,0,4.28-1.65,9.42,9.42,0,0,0,3.1-3,8.52,8.52,0,0,0,1.2-4.68A9.39,9.39,0,0,0,189.66,68.47ZM170.21,52.72h5.3a10,10,0,0,1,1.85.18,6.18,6.18,0,0,1,1.7.57,3.39,3.39,0,0,1,1.22,1.13,3.22,3.22,0,0,1,.48,1.82,3.63,3.63,0,0,1-.43,1.8,3.4,3.4,0,0,1-1.12,1.2,4.92,4.92,0,0,1-1.58.65,7.51,7.51,0,0,1-1.77.2h-5.65Zm11.72,20a3.9,3.9,0,0,1-1.22,1.3,4.64,4.64,0,0,1-1.68.7,8.18,8.18,0,0,1-1.82.2h-7v-8h5.9a15.35,15.35,0,0,1,2,.15,8.47,8.47,0,0,1,2.05.55,4,4,0,0,1,1.57,1.18,3.11,3.11,0,0,1,.63,2A3.71,3.71,0,0,1,181.93,72.72Z" />
                    </g>
                </g>
            </svg>
        `,
    ];

    const g_links = 
    [
        `https://github.com/ACBennny/ACUvid`,
        `https://github.com/ACBennny/ACUvid-v1#features`,
        `https://github.com/ACBennny/ACUvid-v2#features`,
        `https://github.com/ACBennny/Uvidplus#features`,
    ];

    const v_links = 
    [
        `https://github.com/search?q=owner%3AACBennny+acuvid&type=repositories`,
        `https://acuvid-v1.netlify.app`,
        `https://acuvid-v2.netlify.app`,
        `https://uvidplus.netlify.app`,
    ];

    const version_shrt = 
    [
        {
            shrt_name: ` Version 1`,
            shrt_prd: `Sep, 2023 - Dec, 2023`,
            shrt_desc: 
            `
                This is the first ever version of ACUvid. At this time, 
                I was still getting familiar with the concepts of HTML, CSS, 
                and the very basics of JavaScript. I started this project to practice 
                and improve my knowledge; the end goal being to remake the UI of a 
                Flight Entertainment System.
            `,
        },
        {
            shrt_name: `Version 2`,
            shrt_prd: `Jan, 2024 - Mar, 2024`,
            shrt_desc: 
            `
                In this version of ACUvid, I'm shifting from the remaking of a 
                flight entertainment system to simulating a streaming apps. 
                This version maintains a similar structure to its predecessor while making 
                few tweaks and adding new features to resemble that of other streaming apps.
            `,
        },
        {
            shrt_name: `Version 3`,
            shrt_prd: `Apr, 2024 - July, 2025`,
            shrt_desc: 
            `
                As my focus completely shifted to streaming apps, 
                I realized the old platform just wouldn't cut it. 
                Hence, I cleared everything and started with a clean slate. 
                In this version of ACUvid, now Uvidplus (aka Uvid+), I aim to 
                simulate the user interface and user experience of a modern streaming service.
            `,
        },
    ];

    const version_ctnb = 
    [
        {
            ctnb_name: `ACBennny`,
            ctnb_pfp: `/images/pfp-1.jpg`,
            ctnb_link_prsnl: `https://acbennny.netlify.app`,
            ctnb_link_github: `https://github.com/ACBennny`,
            ctnb_link_linkedin: `https://linkedin.com/in/acbennny`
        },
    ];
    
    const docBody = document.querySelector("body");
    const preldrBase = document.querySelector(".preldr-1-base");


    window.addEventListener("load", appNav);


    // Redirect to appropriate destination
    function appNav()
    {
        const params = new URLSearchParams(window.location.search);

        if((params != null) && (params.size > 0))
        {
            let param = params.get("v");

            if((param != null))
            {
                let vNum = Number(param);

                if((vNum != NaN) && (vNum < v_links.length))
                {
                    window.open(v_links[vNum], '_self');
                    console.log(`"opened V${v_links[vNum]}"`)
                }
                else
                {
                    // Open the latest version
                    window.open(v_links.at(-1), '_self');
                }
            }
            else
            {
                param = params.get("g");
                let gNum = Number(param);

                if((gNum != NaN) && (gNum < g_links.length))
                {
                    window.open(g_links[gNum], '_self');
                    console.log(`"opened G${gNum} ${g_links[gNum]}"`)
                }
                else
                {
                    goApp();
                }
            }
        }
        else
        {
            goApp();
        }
    }


    // Init app as no valid URL query was found
    function goApp()
    {
        window.history.replaceState(null, '', `${window.location.pathname}`);
        initApp();
    }


    // Initialize app
    function initApp()
    {

        // App Navigation
        const tabNav = (dstn = null) =>
        {
            // Return if parameter is invalid
            if((dstn == null) || (typeof dstn !== "string") || (dstn === ""))
            {
                console.error("An error occured during navigation.\nTry reloading the page");
                return;
            }

            // Convert to lowercase
            dstn = dstn.toLowerCase();

            // Clear the appCtnt to prep for new info
            appCtnt.innerHTML = preldrSpinnerStruct;

            if((dstn === "ctnb"))
            {
                // Display the app contributors(s)
                let ctnb_base = document.createElement("div");
                ctnb_base.className = "app-ctnb-grid";

                ctnb_base.innerHTML = version_ctnb.map((ctnb) => 
                {
                    const {
                        ctnb_pfp, 
                        ctnb_name, 
                        ctnb_link_prsnl, 
                        ctnb_link_github, 
                        ctnb_link_linkedin
                    } = ctnb;
                    
                    return`
                        <div class="app-ctnb-bdr">
                            <div class="app-ctnb-box">
                                <div class="app-ctnb-pfp-bdr">
                                    <div class="app-ctnb-pfp-box">
                                        <div class="img_preload_box">
                                            <div class="img_preload_sibling"></div>
                                            <img loading="lazy" 
                                                onload="if(!(this.parentElement.classList.contains('loaded'))) this.parentElement.classList.add('loaded')" 
                                                onerror="if(!(this.parentElement.classList.contains('loaderror'))) this.parentElement.classList.add('loaderror')"
                                                src="${ctnb_pfp}" alt="Profile image of ${ctnb_name}" class="app-ctnb-pfp-img"
                                            >
                                        </div>
                                    </div>
                                </div>
                                <div class="app-ctnb-det-bdr">
                                    <div class="app-ctnb-det-box">
                                        <div class="app-ctnb-ttl-box">
                                            <p class="app-ctnb-ttl-txt">${ctnb_name}</p>
                                        </div>
                                        <div class="app-ctnb-lnk-bdr">
                                            <ul class="app-ctnb-lnk-ul">
                                                <li class="app-ctnb-lnk-li">
                                                    <button type="button" onclick="window.open('${ctnb_link_prsnl}')" title="View personal page for${ctnb_name}" class="app-ctnb-lnk-box">
                                                        <div class="app-ctnb-icon">
                                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="app-ctnb-svg">
                                                                <path d="M15.729 3.884c1.434-1.44 3.532-1.47 4.693-.304c1.164 1.168 1.133 3.28-.303 4.72l-2.423 2.433a.75.75 0 0 0 1.062 1.059l2.424-2.433c1.911-1.919 2.151-4.982.303-6.838c-1.85-1.857-4.907-1.615-6.82.304L9.819 7.692c-1.911 1.919-2.151 4.982-.303 6.837a.75.75 0 1 0 1.063-1.058c-1.164-1.168-1.132-3.28.303-4.72z" />
                                                                <path d="M14.485 9.47a.75.75 0 0 0-1.063 1.06c1.164 1.168 1.133 3.279-.303 4.72l-4.847 4.866c-1.435 1.44-3.533 1.47-4.694.304c-1.164-1.168-1.132-3.28.303-4.72l2.424-2.433a.75.75 0 0 0-1.063-1.059l-2.424 2.433c-1.911 1.92-2.151 4.982-.303 6.838c1.85 1.858 4.907 1.615 6.82-.304l4.847-4.867c1.911-1.918 2.151-4.982.303-6.837" />
                                                            </svg>
                                                        </div>
                                                    </button>
                                                </li>
                                                <li class="app-ctnb-lnk-li">
                                                    <button type="button" onclick="window.open('${ctnb_link_github}')" title="View GitHub page for ${ctnb_name}" class="app-ctnb-lnk-box">
                                                        <div class="app-ctnb-icon">
                                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="app-ctnb-svg">
                                                                <path d="M11.996 1.284a10.986 10.986 0 0 0-3.472 21.412c.548.095.722-.227.722-.517c0-.263.006-.991 0-1.91c-3.057.662-3.688-1.448-3.688-1.448a2.9 2.9 0 0 0-1.22-1.607c-.997-.682.075-.669.075-.669a2.3 2.3 0 0 1 1.683 1.131a2.34 2.34 0 0 0 3.197.914a2.34 2.34 0 0 1 .697-1.464c-2.439-.279-5.004-1.22-5.004-5.432a4.25 4.25 0 0 1 1.132-2.948a3.94 3.94 0 0 1 .107-2.907s.924-.295 3.02 1.128a10.4 10.4 0 0 1 5.503 0c2.102-1.422 3.018-1.128 3.018-1.128c.405.92.444 1.96.109 2.907a4.24 4.24 0 0 1 1.13 2.95c0 4.223-2.569 5.15-5.016 5.42a2.6 2.6 0 0 1 .752 2.026v3.041c0 .294.177.619.735.512a10.986 10.986 0 0 0-3.48-21.411" />
                                                            </svg>
                                                        </div>
                                                    </button>
                                                </li>
                                                <li class="app-ctnb-lnk-li">
                                                    <button type="button" onclick="window.open('${ctnb_link_linkedin}')" title="View LinkedIn page for${ctnb_name}" class="app-ctnb-lnk-box">
                                                        <div class="app-ctnb-icon">
                                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="app-ctnb-svg">
                                                                <path fill-rule="evenodd" d="M3.5 6a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5M6 23V8H1v15zM8 8h4.5v1.946C13.216 9.005 14.746 8 17.5 8c4.33 0 5.5 4.32 5.5 7v8h-5v-8c0-1-.5-3-2.5-3c-1.42 0-2.42 1.008-3 1.951V23H8z" clip-rule="evenodd" />
                                                            </svg>
                                                        </div>
                                                    </button>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    `;
                }).join('');

                // Insert struct
                appCtnt.innerHTML = "";
                appCtnt.insertAdjacentElement(`afterbegin`, ctnb_base);
            }
            else if((dstn === "vrsn"))
            {
                // Display the app version(s)
                const versions = document.createElement("div");
                versions.className = "app-vrsn-grid";

                for(let v = (version_shrt.length - 1); v >= 0; v--)
                {
                    const {
                        shrt_name, 
                        shrt_prd, 
                        shrt_desc
                    } = version_shrt[v];
                    
                    versions.innerHTML += `
                        <div class="app-vrsn-bdr">
                            <div class="app-vrsn-box">
                                <div class="app-vrsn-icon-bdr">
                                    <div class="app-vrsn-icon-box">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="app-vrsn-icon-svg">
                                            <path fill-rule="evenodd" d="M6.271 2.112c-.81.106-1.238.301-1.544.6c-.305.3-.504.72-.613 1.513C4.002 5.042 4 6.124 4 7.675v8.57a4.2 4.2 0 0 1 1.299-.593c.528-.139 1.144-.139 2.047-.138H20V7.676c0-1.552-.002-2.634-.114-3.451c-.109-.793-.308-1.213-.613-1.513c-.306-.299-.734-.494-1.544-.6c-.834-.11-1.938-.112-3.522-.112H9.793c-1.584 0-2.688.002-3.522.112m.488 4.483c0-.448.37-.811.827-.811h8.828a.82.82 0 0 1 .827.81a.82.82 0 0 1-.827.811H7.586a.82.82 0 0 1-.827-.81m.827 2.973a.82.82 0 0 0-.827.81c0 .448.37.811.827.811h5.517a.82.82 0 0 0 .828-.81a.82.82 0 0 0-.828-.811z" clip-rule="evenodd" />
	                                        <path d="M8.69 17.135H7.473c-1.079 0-1.456.007-1.746.083a2.46 2.46 0 0 0-1.697 1.538q.023.571.084 1.019c.109.793.308 1.213.613 1.513c.306.299.734.494 1.544.6c.834.11 1.938.112 3.522.112h4.414c1.584 0 2.688-.002 3.522-.111c.81-.107 1.238-.302 1.544-.601c.305-.3.504-.72.613-1.513c.092-.666.11-1.51.113-2.64h-6.896v3.007c0 .298 0 .447-.104.507c-.105.06-.248-.007-.534-.14l-1.371-.638c-.097-.045-.145-.067-.197-.067s-.101.022-.198.067l-1.37.638c-.287.133-.43.2-.535.14c-.104-.06-.104-.21-.104-.507z" />
                                        </svg>
                                    </div>
                                </div>
                                <div class="app-vrsn-det-bdr">
                                    <div class="app-vrsn-det-box">
                                        <div class="app-vrsn-hdr-bdr">
                                            <div class="app-vrsn-hdr-box">
                                                <div class="app-vrsn-ttl-box">
                                                    <span class="app-vrsn-ttl-txt">${shrt_name}</span>
                                                </div>
                                                <button type="button" onclick="window.open('/?v=${v+1}')" class="app-vrsn-atn-box">
                                                    <div class="app-vrsn-atn-icon">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="app-vrsn-atn-svg">
                                                            <path d="M15.729 3.884c1.434-1.44 3.532-1.47 4.693-.304c1.164 1.168 1.133 3.28-.303 4.72l-2.423 2.433a.75.75 0 0 0 1.062 1.059l2.424-2.433c1.911-1.919 2.151-4.982.303-6.838c-1.85-1.857-4.907-1.615-6.82.304L9.819 7.692c-1.911 1.919-2.151 4.982-.303 6.837a.75.75 0 1 0 1.063-1.058c-1.164-1.168-1.132-3.28.303-4.72z" />
                                                            <path d="M14.485 9.47a.75.75 0 0 0-1.063 1.06c1.164 1.168 1.133 3.279-.303 4.72l-4.847 4.866c-1.435 1.44-3.533 1.47-4.694.304c-1.164-1.168-1.132-3.28.303-4.72l2.424-2.433a.75.75 0 0 0-1.063-1.059l-2.424 2.433c-1.911 1.92-2.151 4.982-.303 6.838c1.85 1.858 4.907 1.615 6.82-.304l4.847-4.867c1.911-1.918 2.151-4.982.303-6.837" />
                                                        </svg>
                                                    </div>
                                                </button>
                                            </div>
                                        </div>
                                        <div class="app-vrsn-prd-box">
                                            <p class="app-vrsn-prd-txt">${shrt_prd}</p>
                                        </div>
                                        <div class="app-vrsn-desc-box">
                                            <p class="app-vrsn-desc-txt">${shrt_desc}</p>
                                        </div>
                                        <div class="app-vrsn-more-box">
                                            <button type="button" onclick="window.open('/?g=${v+1}')" class="app-vrsn-more-btn" title="View more details of version ${v+1}">
                                                <p class="app-vrsn-more-txt">View more details</p>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    `;
                }

                // Insert struct
                appCtnt.innerHTML = "";
                appCtnt.insertAdjacentElement(`afterbegin`, versions);
            }
            else
            {
                // Display the app overview

                const overview = document.createElement("div");
                overview.className = "app-ovr-box";
                overview.innerHTML = 
                `
                    <div class="app-desc-box">
                        <p class="app-desc-txt">${abt_text}</p>
                    </div>
                    <div class="app-tech-box">
                        <div class="app-tech-ttl-box">
                            <p class="app-tech-ttl-txt">Languages</p>
                        </div>
                        <div class="app-tech-list">
                            ${
                                abt_lang.map((item) => 
                                {
                                    return `
                                        <div class="app-tech-icon-bdr">
                                            <div class="app-tech-icon-box">${item}</div>
                                        </div>
                                    `
                                }).join('')
                            }
                        </div>
                    </div>
                    <div class="app-tech-box">
                        <div class="app-tech-ttl-box">
                        <div class="app-tech-ttl-box">
                            <p class="app-tech-ttl-txt">Technologies</p>
                        </div>
                        <div class="app-tech-list">
                            ${
                                abt_tools.map((item) => 
                                {
                                    return `
                                        <div class="app-tech-icon-bdr">
                                            <div class="app-tech-icon-box">${item}</div>
                                        </div>
                                    `
                                }).join('')
                            }
                        </div>
                    </div>
                `;

                // Insert struct
                appCtnt.innerHTML = "";
                appCtnt.insertAdjacentElement(`afterbegin`, overview);
            }
        }


        // Init the Main
        const main = document.createElement("main");
        main.className = "main";
        main.innerHTML = main_struct;

        // Selectors
        const backToTopBtn = document.querySelector(".backtotop_btn");
        const appCtnt = main.querySelector(".app-ctnt-box");
        const navBtns = main.querySelectorAll(".app-nav-btn");

        // Display the app overview
        navBtns[0].classList.add("selected");
        tabNav("desc");

        // Insert the Main
        preldrBase.insertAdjacentElement('afterend', main);

        // Hide preloader
        preldrBase.classList.add("loaded");

        // Toggle "back-to-top" button
        window.addEventListener("scroll", () => 
        {
            backToTopBtn.classList.toggle("float", window.scrollY > 25);
        });

        // Switching tabs
        navBtns.forEach((btn) => 
        {
            const switch_atn = () =>
            {
                // Get destination value
                const btn_dtn = btn.getAttribute("data-nav");

                // Deselect prev tab and select cuurent tab
                navBtns.forEach((prevBtn) => 
                {
                    if((prevBtn.classList.contains("selected"))) prevBtn.classList.remove("selected");
                });
                btn.classList.add("selected");

                // Open selected tab
                tabNav(btn_dtn);
            }

            btn.addEventListener("click", switch_atn);
        });
    }


