/*************************************************************
 * This is the script for the Video Player of Uvid
 * 
 * @author (Anyanwu Benedict Chukwuemeka)
 * @version (v0.01)
 *************************************************************/



    // VIDEO PLAYER
        
        const video_players = document.querySelectorAll(".video_player");
        video_players.forEach(video_player => 
        {
            const video_player_html = 
            `
                <div class="loader">
                    <div class="spinner"></div>
                </div>
                ${video_player.innerHTML}
                <div class="episode_title_bdr">
                    <div class="episode_title_box">
                        <div class="companyTitle">
                            <h1 class="head">U</h1>
                            <h1 class="tail">vid</h1>
                        </div>
                        <div class="episodeTitle"></div>
                    </div>
                </div>
                <div class="cover-vid">
                    <div class="playPause_fullscreen_VidPc"></div>
                    <div class="mobile_controls_box">
                        <div class="options center mobile_controls">
                            <button class="skip-backward" title="rewind 5s" aria-label="rewind 5s">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="skipBackwardIcon">
                                    <path d="M459.5 440.6c9.5 7.9 22.8 9.7 34.1 4.4s18.4-16.6 18.4-29V96c0-12.4-7.2-23.7-18.4-29s-24.5-3.6-34.1 4.4L288 214.3V256v41.7L459.5 440.6zM256 352V256 128 96c0-12.4-7.2-23.7-18.4-29s-24.5-3.6-34.1 4.4l-192 160C4.2 237.5 0 246.5 0 256s4.2 18.5 11.5 24.6l192 160c9.5 7.9 22.8 9.7 34.1 4.4s18.4-16.6 18.4-29V352z"/>
                                </svg>
                            </button>
                            <button class="play-pause" title="play" aria-label="play">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 512" class="playIcon">
                                    <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/>
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 512" class="pauseIcon hide">
                                    <path d="M48 64C21.5 64 0 85.5 0 112V400c0 26.5 21.5 48 48 48H80c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H48zm192 0c-26.5 0-48 21.5-48 48V400c0 26.5 21.5 48 48 48h32c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H240z"/>
                                </svg>
                            </button>
                            <button class="skip-forward" title="fast-forward 5s" aria-label="fast-forward 5s">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="skipForwardIcon">
                                    <path d="M52.5 440.6c-9.5 7.9-22.8 9.7-34.1 4.4S0 428.4 0 416V96C0 83.6 7.2 72.3 18.4 67s24.5-3.6 34.1 4.4L224 214.3V256v41.7L52.5 440.6zM256 352V256 128 96c0-12.4 7.2-23.7 18.4-29s24.5-3.6 34.1 4.4l192 160c7.3 6.1 11.5 15.1 11.5 24.6s-4.2 18.5-11.5 24.6l-192 160c-9.5 7.9-22.8 9.7-34.1 4.4s-18.4-16.6-18.4-29V352z"/>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                <p class="captionText"></p>
                <div class="thumbnailBox">
                    <div class="thumbnailFence">
                        <div class="thumbnailHouse">
                            <div class="progressAreaTime" >0:00</div>
                            <div class="thumbnail">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="wrapper">
                    <div class="progress-area">
                    <canvas class="bufferedBar"></canvas>
                        <div class="progress-bar">
                            <span></span>
                        </div>
                    </div>

                    <ul class="video-controls">
                        <li class="options left">
                            <button class="volume" title="mute" aria-label="mute">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" class="volume_highIcon">
                                    <path d="M533.6 32.5C598.5 85.2 640 165.8 640 256s-41.5 170.7-106.4 223.5c-10.3 8.4-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8C557.5 398.2 592 331.2 592 256s-34.5-142.2-88.7-186.3c-10.3-8.4-11.8-23.5-3.5-33.8s23.5-11.8 33.8-3.5zM473.1 107c43.2 35.2 70.9 88.9 70.9 149s-27.7 113.8-70.9 149c-10.3 8.4-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8C475.3 341.3 496 301.1 496 256s-20.7-85.3-53.2-111.8c-10.3-8.4-11.8-23.5-3.5-33.8s23.5-11.8 33.8-3.5zm-60.5 74.5C434.1 199.1 448 225.9 448 256s-13.9 56.9-35.4 74.5c-10.3 8.4-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8C393.1 284.4 400 271 400 256s-6.9-28.4-17.7-37.3c-10.3-8.4-11.8-23.5-3.5-33.8s23.5-11.8 33.8-3.5zM301.1 34.8C312.6 40 320 51.4 320 64V448c0 12.6-7.4 24-18.9 29.2s-25 3.1-34.4-5.3L131.8 352H64c-35.3 0-64-28.7-64-64V224c0-35.3 28.7-64 64-64h67.8L266.7 40.1c9.4-8.4 22.9-10.4 34.4-5.3z"/>
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" class="volume_lowIcon hide">
                                    <path d="M301.1 34.8C312.6 40 320 51.4 320 64V448c0 12.6-7.4 24-18.9 29.2s-25 3.1-34.4-5.3L131.8 352H64c-35.3 0-64-28.7-64-64V224c0-35.3 28.7-64 64-64h67.8L266.7 40.1c9.4-8.4 22.9-10.4 34.4-5.3zM412.6 181.5C434.1 199.1 448 225.9 448 256s-13.9 56.9-35.4 74.5c-10.3 8.4-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8C393.1 284.4 400 271 400 256s-6.9-28.4-17.7-37.3c-10.3-8.4-11.8-23.5-3.5-33.8s23.5-11.8 33.8-3.5z"/>
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" class="volume_offIcon hide">
                                    <path d="M301.1 34.8C312.6 40 320 51.4 320 64V448c0 12.6-7.4 24-18.9 29.2s-25 3.1-34.4-5.3L131.8 352H64c-35.3 0-64-28.7-64-64V224c0-35.3 28.7-64 64-64h67.8L266.7 40.1c9.4-8.4 22.9-10.4 34.4-5.3zM425 167l55 55 55-55c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-55 55 55 55c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-55-55-55 55c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l55-55-55-55c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0z"/>
                                </svg>
                            </button>
                            <input class="volume-range" type="range" min="0" max="1" step="any" value="0.5" title="volume" aria-label="volume">
                            <div class="video-timer">
                                <p class="current-time">00:00</p>
                                <p class="separator"> / </p>
                                <p class="video-duration">00:00</p>
                            </div>
                        </li>
                        <li class="options center pc_controls">
                            <button class="skip-backward" title="rewind 5s" aria-label="rewind 5s">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="skipBackwardIcon">
                                    <path d="M459.5 440.6c9.5 7.9 22.8 9.7 34.1 4.4s18.4-16.6 18.4-29V96c0-12.4-7.2-23.7-18.4-29s-24.5-3.6-34.1 4.4L288 214.3V256v41.7L459.5 440.6zM256 352V256 128 96c0-12.4-7.2-23.7-18.4-29s-24.5-3.6-34.1 4.4l-192 160C4.2 237.5 0 246.5 0 256s4.2 18.5 11.5 24.6l192 160c9.5 7.9 22.8 9.7 34.1 4.4s18.4-16.6 18.4-29V352z"/>
                                </svg>
                            </button>
                            <button class="play-pause" title="play" aria-label="play">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 512" class="playIcon">
                                    <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/>
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 512" class="pauseIcon hide">
                                    <path d="M48 64C21.5 64 0 85.5 0 112V400c0 26.5 21.5 48 48 48H80c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H48zm192 0c-26.5 0-48 21.5-48 48V400c0 26.5 21.5 48 48 48h32c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H240z"/>
                                </svg>
                            </button>
                            <button class="skip-forward" title="fast-forward 5s" aria-label="fast-forward 5s">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="skipForwardIcon">
                                    <path d="M52.5 440.6c-9.5 7.9-22.8 9.7-34.1 4.4S0 428.4 0 416V96C0 83.6 7.2 72.3 18.4 67s24.5-3.6 34.1 4.4L224 214.3V256v41.7L52.5 440.6zM256 352V256 128 96c0-12.4 7.2-23.7 18.4-29s24.5-3.6 34.1 4.4l192 160c7.3 6.1 11.5 15.1 11.5 24.6s-4.2 18.5-11.5 24.6l-192 160c-9.5 7.9-22.8 9.7-34.1 4.4s-18.4-16.6-18.4-29V352z"/>
                                </svg>
                            </button>
                        </li>
                        <li class="options right">
                            <button class="pic-in-pic" title="pic-in-pic" aria-label="pic-in-pic">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 450 450" class="picInPicIcon">
                                    <path d="M384 224v184a40 40 0 01-40 40H104a40 40 0 01-40-40V168a40 40 0 0140-40h167.48M336 64h112v112M224 288L440 72" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="50"/>
                                </svg>
                            </button>
                            <button class="settingsBtn" title="settings" aria-label="settings">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="settingsIcon">
                                    <path d="M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-55.7-17.7c-13.4 10.3-28.2 18.9-44 25.4l-12.5 57.1c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-12.5-57.1c-15.8-6.5-30.6-15.1-44-25.4L83.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L22.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l55.7 17.7c13.4-10.3 28.2-18.9 44-25.4l12.5-57.1c2-9.1 9-16.3 18.2-17.8C227.3 1.2 241.5 0 256 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l12.5 57.1c15.8 6.5 30.6 15.1 44 25.4l55.7-17.7c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM256 336a80 80 0 1 0 0-160 80 80 0 1 0 0 160z"/>
                                </svg>
                            </button>
                            <button class="fullscreenBtn" title="enter fullscreen" aria-label="enter fullscreen">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="expandIcon">
                                    <path d="M32 32C14.3 32 0 46.3 0 64v96c0 17.7 14.3 32 32 32s32-14.3 32-32V96h64c17.7 0 32-14.3 32-32s-14.3-32-32-32H32zM64 352c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7 14.3 32 32 32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H64V352zM320 32c-17.7 0-32 14.3-32 32s14.3 32 32 32h64v64c0 17.7 14.3 32 32 32s32-14.3 32-32V64c0-17.7-14.3-32-32-32H320zM448 352c0-17.7-14.3-32-32-32s-32 14.3-32 32v64H320c-17.7 0-32 14.3-32 32s14.3 32 32 32h96c17.7 0 32-14.3 32-32V352z"/>
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="compressIcon hide">
                                    <path d="M160 64c0-17.7-14.3-32-32-32s-32 14.3-32 32v64H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h96c17.7 0 32-14.3 32-32V64zM32 320c-17.7 0-32 14.3-32 32s14.3 32 32 32H96v64c0 17.7 14.3 32 32 32s32-14.3 32-32V352c0-17.7-14.3-32-32-32H32zM352 64c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7 14.3 32 32 32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H352V64zM320 320c-17.7 0-32 14.3-32 32v96c0 17.7 14.3 32 32 32s32-14.3 32-32V384h64c17.7 0 32-14.3 32-32s-14.3-32-32-32H320z"/>
                                </svg>
                            </button>
                        </li>
                    </ul>
                </div>
            `;

            video_player.innerHTML = video_player_html;

            const vidBdr = document.querySelector(".vid_bdr");
            let vidBdrBound;
            let vidBdrHeight;
            let vidBdrHeightThird;
            const videoTitle = video_player.querySelector(".episodeTitle");
            const mainVideo = video_player.querySelector(".main-video");
            const progressAreaTime = video_player.querySelector(".progressAreaTime");
            const vidCtrlBdr = video_player.querySelector(".wrapper");
            const progressArea = video_player.querySelector(".progress-area");
            const bufferedBar = video_player.querySelector(".bufferedBar");
            const progress_Bar = video_player.querySelector(".progress-bar");
            const skipBackward = video_player.querySelectorAll(".skip-backward .skipBackwardIcon");
            const skipForward = video_player.querySelectorAll(".skip-forward .skipForwardIcon");
            const playPauseBtnBox = video_player.querySelectorAll(".play-pause");
            const playPauseBtn = video_player.querySelectorAll(".play-pause svg");
            const playBtn = video_player.querySelectorAll(".play-pause .playIcon");
            const pauseBtn = video_player.querySelectorAll(".play-pause .pauseIcon");
            const volumeBtnBox = video_player.querySelector(".volume");
            const volumeBtn = video_player.querySelectorAll(".volume svg");
            const volumeHighBtn = video_player.querySelector(".volume .volume_highIcon");
            const volumeLowBtn = video_player.querySelector(".volume .volume_lowIcon");
            const volumeOffBtn = video_player.querySelector(".volume .volume_offIcon");
            const volumeSlider = video_player.querySelector(".left input.volume-range");
            const current = video_player.querySelector(".current-time");
            const totalDuration = video_player.querySelector(".video-duration");
            const picture_in_picutre = video_player.querySelector(".pic-in-pic .picInPicIcon");
            const fullScreenBtnBox = video_player.querySelectorAll(".fullscreenBtn");
            const fullScreenBtn = video_player.querySelectorAll(".fullscreenBtn svg");
            const fullScreenExpandBtn = video_player.querySelector(".fullscreenBtn .expandIcon");
            const fullScreenContractBtn = video_player.querySelector(".fullscreenBtn .compressIcon");
            const languageUL = video_player.querySelector(".language_UL");
            const languageLI = languageUL.querySelectorAll(".language_LI");
            const playbackUL = video_player.querySelector(".playbackSpeed_UL");
            const playbackLI = playbackUL.querySelectorAll(".playbackSpeed_LI");
            const tracks = video_player.querySelectorAll("track");
            const loader = video_player.querySelector(".loader");
            const pcControlTapBox = video_player.querySelector(".playPause_fullscreen_VidPc");
            const autoPlay = video_player.querySelector(".listItemAutoPlay");
            const autoPlayEpCheckBox = video_player.querySelector(".listItemAutoPlay #vid_AutoPlayToggleCheckbox");
            const nextEpLink = video_player.querySelector(".next_epLink");
            const settingsBtn = video_player.querySelector(".settingsBtn");
            const caption_labels = video_player.querySelector(".captions_UL");
            let caption_text = video_player.querySelector(".captionText");

            const thumbnailBox = video_player.querySelector(".thumbnailBox");
            const thumbnail = video_player.querySelector(".thumbnail");
            let thumbnails = [];
            let thumbnailWidth = 250;
            let thumbnailSpacing = thumbnailWidth * 0.75;
            let thumbnailHeight = 150;
            let horizontalItemCount = 5;
            let verticalItemCount = 5;

            let ctrltimer;


            const settingsBase = video_player.querySelector(".settingsBase");
            const closeSettingsBase = video_player.querySelector(".closeSettingsBase");
            const settingsHomeBdr = video_player.querySelector(".settingsHomeBdr");
            const settingsOptBdr = video_player.querySelectorAll(".settingsOptBdr");
            const openSettingsOptBdr = video_player.querySelectorAll(".openSettingsOptBdr");
            const closeSettingsOptBdr = video_player.querySelectorAll(".closeSettingsOptBdr");

            const listItemLang = settingsBase.querySelector(".listItemLanguage");
            const listItemCaption = settingsBase.querySelector(".listItemSubtitleCC");
            const listItemSpeed = settingsBase.querySelector(".listItemPlaybackSpeed");
            const listItemQuality = settingsBase.querySelector(".listItemQuality");


            function checkVidBdrBounds()
            {
                vidBdrBound = vidBdr.getBoundingClientRect();
                vidBdrHeight = vidBdrBound.height;
                vidBdrHeightThird = Math.round(vidBdrHeight/3);
            }
            window.addEventListener("load" ,  () => 
            {
                checkVidBdrBounds();
                videoTitle.textContent = majorTitle.textContent;
            });
            window.addEventListener("scroll" , () => 
            {
                checkVidBdrBounds();
            });
            window.addEventListener("resize" , () => 
            {
                checkVidBdrBounds();
            });
            window.addEventListener("change" , () => 
            {
                checkVidBdrBounds();
            });
            

            // Hide controls
            function hideControls() 
            {
                if(mainVideo.paused) return;
                if((window.matchMedia("(hover: hover)")) && (vidCtrlBdr.matches(":hover"))) return;
                if(!(window.matchMedia("(hover: none)")) && (loader.style.display == "flex")) return;
                if(settingsBase.matches(":hover")) return;
                if (document.pictureInPictureElement === mainVideo) return;
                ctrltimer = setTimeout(() => 
                {
                    video_player.classList.remove("show-controls");
                    closeSettBase();
                }, 2000);
            }

            // Remove "active" classes from an element
            function removeActiveClasses(e)
            {
                e.forEach((event) => 
                {
                    event.classList.remove("active");
                });
            }

            // Function to adjust volume
            function adjustVolume(val)
            {
                let newVolume = parseFloat(volumeSlider.value) + val;
        
                // Ensure volume is within [0, 1]
                newVolume = Math.max(0, Math.min(1, newVolume));
                volumeSlider.value = newVolume;
                mainVideo.volume = newVolume;
                updateVolumeIcon(newVolume);
            }
        
            // Update volume icon based on volume level
            function updateVolumeIcon(volume)
            {
                
                if(volume > 0.4)
                {
                    volumeOffBtn.classList.add("hide");
                    volumeLowBtn.classList.add("hide");
                    volumeHighBtn.classList.remove("hide");
                    volumeBtnBox.title = "mute";
                    volumeBtnBox.ariaLabel = "mute";
                }
                else if(volume <= 0.4 && volume > 0)
                {
                    volumeLowBtn.classList.remove("hide");
                    volumeHighBtn.classList.add("hide");
                    volumeOffBtn.classList.add("hide");
                    volumeBtnBox.title = "mute";
                    volumeBtnBox.ariaLabel = "mute";
                }
                else
                {
                    volumeOffBtn.classList.remove("hide");
                    volumeLowBtn.classList.add("hide");
                    volumeHighBtn.classList.add("hide");
                    volumeBtnBox.title = "unmute";
                    volumeBtnBox.ariaLabel = "unmute";
                }
            }

            // To toggle between mute
            function toggleMute()
            {
                if(!(volumeOffBtn.classList.contains("hide")))
                {
                    mainVideo.volume = 0.5;
                    volumeHighBtn.classList.remove("hide");
                    volumeLowBtn.classList.add("hide");
                    volumeOffBtn.classList.add("hide");
                    volumeBtnBox.title = "mute";
                    volumeBtnBox.ariaLabel = "mute";
                }
                else
                {
                    mainVideo.volume = 0.0;
                    volumeOffBtn.classList.remove("hide");
                    volumeLowBtn.classList.add("hide");
                    volumeHighBtn.classList.add("hide");
                    volumeBtnBox.title = "unmute";
                    volumeBtnBox.ariaLabel = "unmute";
                }
                volumeSlider.value = mainVideo.volume;
            }
        
            function videoSkip(skipLength)
            {
                mainVideo.currentTime += skipLength;
            }
        
            function vidHasEnded()
            {
                video_player.classList.add("show-controls");
                mainVideo.play();
                if(document.fullscreenElement) {
                    toggleFullScreenMode();
                }
        
                // Go to Next episode when video ends, if auto next is on
                if(autoPlayEpCheckBox.checked == true)
                {
                    // window.open(nextEpLink.href , "_self");
                }
            }

            // Play video function
            function toggleVidPlay()
            {
                mainVideo.paused ? mainVideo.play() : mainVideo.pause();
            }

            // Fast-forward / Rewind video
            function videoSkip(skipLength)
            {
                mainVideo.currentTime += skipLength;
            }
        
            // Toggle fullscreen
            function toggleFullScreenMode()
            {
                video_player.classList.toggle("fullscreen");
                if(document.fullscreenElement) 
                {
                    fullScreenContractBtn.classList.add("hide");
                    fullScreenExpandBtn.classList.remove("hide");
                    fullScreenBtnBox.forEach(box => 
                    {
                        box.title = "enter fullscreen";
                        box.ariaLabel = "enter fullscreen";
                    });
                    return document.exitFullscreen();
                }
                fullScreenExpandBtn.classList.add("hide");
                fullScreenContractBtn.classList.remove("hide");
                fullScreenBtnBox.forEach(box => 
                {
                    box.title = "exit fullscreen";
                    box.ariaLabel = "exit fullscreen";
                });
                video_player.requestFullscreen();
            }

            document.addEventListener("fullscreenchange", () => 
            {
                if(!document.fullscreenElement)
                {
                    fullScreenContractBtn.classList.add("hide");
                    fullScreenExpandBtn.classList.remove("hide");
                }
            });

            document.addEventListener("visibilitychange", () => 
            {
                if (document.visibilityState === 'hidden') {
                    // if video is in PiP, close and disable it.
                    if (document.pictureInPictureElement === mainVideo)
                    {
                        document.exitPictureInPicture()
                        .then(() => 
                        {
                            mainVideo.disablePictureInPicture = true;
                        })
                        .catch(error => 
                        {
                            console.error('Failed to exit Picture-in-Picture mode:', error);
                        });
                    }
                    else
                    {
                        // If the video is not in PiP mode, only disable PiP
                        mainVideo.disablePictureInPicture = true;
                    }
                    mainVideo.pause(); 
                }
                else
                {
                    mainVideo.disablePictureInPicture = false;
                }
            });
        
            // Keyboard key functions for pc only
            document.addEventListener("keydown", e => 
            {
                const tagName = document.activeElement.tagName.toLowerCase();
                if(document.pictureInPictureElement) return;
                if(window.innerWidth < 768) return;
                if(window.scrollY > vidBdrHeightThird) return;
                if (tagName === "input") return;
            
                switch (e.key.toLowerCase()) {
                case " ":
                    e.preventDefault();
                    toggleVidPlay();
                    break;
                case "k":
                case "p":
                    toggleVidPlay();
                    break;
                case "f":
                    toggleFullScreenMode();
                    break;
                case "m":
                    toggleMute();
                    break;
                case "arrowleft":
                case "j":
                    videoSkip(-5);
                    break;
                case "arrowright":
                case "l":
                    videoSkip(5);
                    break;
                case "arrowup":
                    e.preventDefault();
                    adjustVolume(0.1);
                    break;
                case "arrowdown":
                    e.preventDefault();
                    adjustVolume(-0.1);
                    break;
                case "c":
                    toggleCaptions();
                    break;
                }
            });

            // Insert tracks into list if present
            if (tracks.length != 0) 
            {
                caption_labels.insertAdjacentHTML(
                    "afterbegin",
                    // `<li data-track="OFF" class="active">OFF</li>`
                    `
                        <li data-track="OFF" class="settingsCtnt_LI captions_LI active">
                            <p>Off</p>
                        </li>
                    `
                );
                for (let i = 0; i < tracks.length; i++) 
                {
                    let trackLI = 
                    `
                        <li data-track="${tracks[i].label}" class="settingsCtnt_LI captions_LI" title="${tracks[i].label}" aria-label="${tracks[i].label}">
                            <p>${tracks[i].label}</p>
                        </li>
                    `;
                    caption_labels.insertAdjacentHTML("beforeend", trackLI);
                }
            }
            const caption = caption_labels.querySelectorAll(".captions_LI");

            // Showing controls on mouse move
            video_player.addEventListener("mousemove", () => 
            {
                video_player.classList.add("show-controls");
                clearTimeout(ctrltimer);
                hideControls();
            });

            const formatTime = time => 
            {
                let seconds = Math.floor(time % 60),
                minutes = Math.floor(time / 60) % 60,
                hours = Math.floor(time / 3600);
        
                seconds = seconds < 10 ? `0${seconds}` : seconds;
                minutes = minutes < 10 ? `0${minutes}` : minutes;
                hours = hours < 10 ? `0${hours}` : hours;
        
                if(hours == 0) {
                    return `${minutes}:${seconds}`
                }
                return `${hours}:${minutes}:${seconds}`;
            }

            // Load video duration
            mainVideo.addEventListener("loadeddata", (e) => 
            {
                totalDuration.innerHTML = formatTime(mainVideo.duration);
                mainVideo.volume = volumeSlider.value;
            });

            // Current video duration
            mainVideo.addEventListener("timeupdate", (e) => 
            {
                let {currentTime, duration} = e.target;
                let percent = (currentTime / duration) * 100;
                progress_Bar.style.width = `${percent}%`;
                current.innerText = formatTime(currentTime);
            });

            // Updating playing video's current time according to the progress bar width
            progressArea.addEventListener("pointerdown", (e) => 
            {
                progressArea.setPointerCapture(e.pointerId);
                setTimelinePosition(e);
                progressArea.addEventListener("pointermove", setTimelinePosition);
                progressArea.addEventListener("pointerup", () => 
                {
                    progressArea.removeEventListener("pointermove", setTimelinePosition);
                });
            });


            function setTimelinePosition(e) 
            {
                let timelineWidth = progressArea.clientWidth;
                progress_Bar.style.width = `${e.offsetX}px`;
                mainVideo.currentTime = (e.offsetX / timelineWidth) * mainVideo.duration;
                current.innerText = formatTime(mainVideo.currentTime);

            }

            function drawProgress(canvas, buffered, duration) 
            {
                let context = canvas.getContext('2d', { antialias: false });
                context.fillStyle = "#ffffffa6";

                let height = canvas.height;
                let width = canvas.width;

                if (!height || !width) throw "Canva's width or height or not set.";
                context.clearRect(0, 0, width, height);

                for (let i = 0; i < buffered.length; i++)
                {
                    let leadingEdge = buffered.start(i) / duration * width;
                    let trailingEdge = buffered.end(i) / duration * width;
                    context.fillRect(leadingEdge, 0, trailingEdge - leadingEdge, height)
                }
            }

            mainVideo.addEventListener('progress', () => 
            {
                drawProgress(bufferedBar, mainVideo.buffered, mainVideo.duration);
            });

            mainVideo.addEventListener('waiting', () => 
            {
                loader.style.display = "flex";
            });

            mainVideo.addEventListener('canplay', () => 
            {
                loader.style.display = "none";
            });

            // Rewinding video
            skipBackward.forEach(btn => 
            {
                btn.addEventListener("click", () => 
                {
                    videoSkip(-5);
                });
            });
        
            // Fast forwarding video
            skipForward.forEach(btn => 
            {
                btn.addEventListener("click", () => 
                {
                    videoSkip(5);
                });
            });
        
            playPauseBtn.forEach(btn => 
            {
                btn.addEventListener("click", () => 
                {
                    toggleVidPlay();
                });
            });

            // Pause/play (click) For Pc/ wide screen users only 
            pcControlTapBox.addEventListener("click" , () => 
            {
                toggleVidPlay();
            });
        
            // Playing Video
            mainVideo.addEventListener("play", () => 
            {
                window.scrollTo(0, 0);
                playBtn.forEach(btn => 
                {
                    btn.classList.add("hide");
                });
                pauseBtn.forEach(btn => 
                {
                    btn.classList.remove("hide");
                });
                playPauseBtnBox.forEach(box => 
                {
                    box.title = "pause";
                    box.ariaLabel = "pause";
                });
                video_player.classList.add("show-controls");
                clearTimeout(ctrltimer);
                hideControls();
            });
        
            // Paused Video
            mainVideo.addEventListener("pause", () => 
            {
                playBtn.forEach(btn => 
                {
                    btn.classList.remove("hide");
                });
                pauseBtn.forEach(btn => 
                {
                    btn.classList.add("hide");
                });
                playPauseBtnBox.forEach(box => 
                {
                    box.title = "play";
                    box.ariaLabel = "play";
                });
                video_player.classList.add("show-controls");
                clearTimeout(ctrltimer);
                hideControls();
            });

            volumeSlider.addEventListener("input", e => 
            {
                mainVideo.volume = e.target.value;
                updateVolumeIcon(e.target.value);
            });

            volumeBtn.forEach(btn => 
            {
                btn.addEventListener("click", () => 
                {
                    toggleMute();
                });
            });

            // Update the progress area time and display it on mouse movement
            progressArea.addEventListener("mousemove", (e) => 
            {
                let timelineWidth = progressArea.clientWidth;
                let posX = e.offsetX;
                let percent = Math.floor((posX / timelineWidth) * mainVideo.duration);
                const progressTime = progressArea.querySelector("span");
                posX = posX < thumbnailSpacing ? thumbnailSpacing : (posX > (timelineWidth - thumbnailSpacing)) ? (timelineWidth - thumbnailSpacing) : posX;
                progressAreaTime.innerText = formatTime(percent);

                // Displaying thumbnail
                thumbnailBox.style.setProperty("--posX", `${posX}px`);
                thumbnail.style.setProperty("--posX", `${posX}px`);
                thumbnailBox.classList.add("show");

                for (let item of thumbnails)
                {
                    let data = item.sec.find(x1 => x1.index === Math.floor(percent));

                    // Show thumbnail if found
                    if (data)
                    {
                        if (item.data != undefined)
                        {
                            thumbnail.setAttribute("style", `background-image: url(${item.data});background-position-x: ${data.backgroundPositionX}px;background-position-y: ${data.backgroundPositionY}px;--posX: ${posX}px;`);
                            return;
                        }
                    }
                }

            });
            
            // Hiding thumbnail and progress area time when mouse is not hovering the progress area
            progressArea.addEventListener("mouseleave", () => 
            {
                thumbnailBox.classList.remove("show");
            });

            mainVideo.addEventListener('ended', () => 
            {
                if(autoPlayEpCheckBox.checked == false) return;
                mainVideo.play();
                // window.location.search = "google.com";
                // window.history.replaceState({}, '', 'google.com?key=m');
            });

            // Picture in picture
            picture_in_picutre.addEventListener("click", () => 
            {
                mainVideo.requestPictureInPicture();
            });

            // Full screen function

            fullScreenBtn.forEach(btn => 
            {
                btn.addEventListener("click", () => 
                {
                    toggleFullScreenMode();
                });
            });

            // Open settings
            settingsBtn.addEventListener("click", () => 
            {
                settingsBase.classList.toggle("active");
                settingsBtn.classList.toggle("active");

                if ((settingsHomeBdr.classList.contains("notActive")))
                {
                    closeSettingsOpt();
                    settingsHomeBdr.classList.remove("notActive");
                }
            });

            // Close Settings Menu
            document.addEventListener("mousedown", e =>
            {
                closeSettBase()
            });
            document.addEventListener("keydown", e =>
            {
                closeSettBase()
            });
            // document.addEventListener("mousedown", e =>
            // {
            //     closeSettBase()
            // });
            // document.addEventListener("mousedown", e =>
            // {
            //     closeSettBase()
            // });

            function closeSettBase()
            {
                if(settingsBase.matches(":hover")) return;
                closeSettingsOpt();
                settingsBase.classList.remove("active");
            }

            closeSettingsBase.addEventListener("click" , () => 
            {
                settingsBase.classList.remove("active");
                settingsBtn.classList.remove("active");
            });
            
            // Opening sections of the settings menu
            openSettingsOptBdr.forEach((btn, opnBdr) => 
            {
                btn.addEventListener("click" , () => 
                {
                    settingsHomeBdr.classList.add("notActive");
                    settingsOptBdr[opnBdr].classList.add("active");
                });
            });

            function closeSettingsOpt()
            {
                settingsOptBdr.forEach(bdr => 
                {
                    bdr.classList.remove("active");
                });
                settingsHomeBdr.classList.remove("notActive");
            }
            
            closeSettingsOptBdr.forEach(btn => 
            {
                btn.addEventListener("click" , closeSettingsOpt);
            });

            // Auto play
            autoPlay.addEventListener("click", () => 
            {
                if (autoPlayEpCheckBox.checked == true) 
                {
                    autoPlay.title = "Autoplay is on";
                    autoPlay.ariaLabel = "Autoplay is on";
                }
                else
                {
                    autoPlay.title = "Autoplay is off";
                    autoPlay.ariaLabel = "Autoplay is off";
                }
            });

            // Language Settings
            languageLI.forEach(option => 
            {
                option.addEventListener("click", () => 
                {
                    removeActiveClasses(languageLI);
                    option.classList.add("active");
                    listItemLang.title = "Language is " + option.querySelector("p").textContent;
                    listItemLang.ariaLabel = "Language is " + option.querySelector("p").textContent;
                    listItemLang.querySelector(".itemValue").textContent = option.querySelector("p").textContent;
                });
            });

            // Speed options menu
            playbackLI.forEach(option => 
            {
                let dataSpeed = option.dataset.speed;
                option.title = "x" + dataSpeed+ " speed";
                option.ariaLabel = "x" + dataSpeed + " speed";
                option.addEventListener("click", () => 
                {
                    mainVideo.playbackRate = dataSpeed;
                    removeActiveClasses(playbackLI);
                    option.classList.add("active");
                    listItemSpeed.title = "Playback Speed is " + option.querySelector("p").textContent;
                    listItemSpeed.ariaLabel = "Playback Speed is " + option.querySelector("p").textContent;
                    listItemSpeed.querySelector(".itemValue").textContent = option.querySelector("p").textContent;
                });
            });

            // Captions
            caption.forEach((event) => 
            {
                event.addEventListener("click", () => 
                {
                    removeActiveClasses(caption);
                    event.classList.add("active");
                    changeCaption(event);
                    caption_text.innerHTML = "";
                    listItemCaption.title = "Subtitles/CC is " + event.querySelector("p").textContent;
                    listItemCaption.ariaLabel = "Playback Speed is " + event.querySelector("p").textContent;
                    listItemCaption.querySelector(".itemValue").textContent = event.querySelector("p").textContent;
                });
            });

            let track = mainVideo.textTracks;

            function changeCaption(lbl) 
            {
                let trackLabel = lbl.getAttribute("data-track");
                for (let i = 0; i < track.length; i++)
                {
                    track[i].mode = "disabled";
                    if (track[i].label == trackLabel)
                    {
                        track[i].mode = "showing";
                    }
                }
            }

            // Video Quality
            const qualityUL = video_player.querySelector(".quality_UL");
            const qualities = video_player.querySelectorAll("source[size]");

            qualities.forEach(event =>
            {
                let quality_html = 
                `
                    <li data-quality="${event.getAttribute('size')}" class="settingsCtnt_LI quality_LI" title="${event.getAttribute('size')}p" aria-label="${event.getAttribute('size')}p">
                        <p>${event.getAttribute('size')}p</p>
                    </li>
                `;
                qualityUL.insertAdjacentHTML('afterbegin', quality_html);
            });

            const qualityLI = qualityUL.querySelectorAll(".quality_LI");
            qualityLI.forEach((event) => 
            {
                event.addEventListener('click', (e) => 
                {
                    let quality = event.getAttribute('data-quality');
                    removeActiveClasses(qualityLI);
                    event.classList.add('active');

                    qualities.forEach(event => 
                    {
                        if (event.getAttribute('size') == quality)
                        {
                            let video_current_duration = mainVideo.currentTime;
                            let video_source = event.getAttribute('src');
                            mainVideo.src = video_source;
                            mainVideo.currentTime = video_current_duration;
                            toggleVidPlay();
                        }
                    });

                    listItemQuality.title = "Video Quality is " + event.querySelector("p").textContent;
                    listItemQuality.ariaLabel = "Video Quality is " + event.querySelector("p").textContent;
                    listItemQuality.querySelector(".itemValue").textContent = event.querySelector("p").textContent;
                });
            });

            for (let i = 0; i < track.length; i++)
            {
                track[i].addEventListener("cuechange", () =>
                {
                    if (track[i].mode === "showing")
                    {
                        if (track[i].activeCues[0])
                        {
                            let span = 
                            `
                                <span>
                                    <mark>${track[i].activeCues[0].text}</mark>
                                </span>
                            `;
                            caption_text.innerHTML = span;
                        }
                        else
                        {
                            caption_text.innerHTML = "";
                        }
                    }
                });
            }

            //  blob url
            let mainVideoSources = mainVideo.querySelectorAll("source");
            for (let i = 0; i < mainVideoSources.length; i++)
            {
                let videoUrl = mainVideoSources[i].src;
                blobUrl(mainVideoSources[i], videoUrl);
            }

            function blobUrl(video, videoUrl)
            {
                let xhr = new XMLHttpRequest();
                xhr.open("GET", videoUrl);
                xhr.responseType = "arraybuffer";
                xhr.onload = (e) => 
                {
                    let blob = new Blob([xhr.response]);
                    let url = URL.createObjectURL(blob);
                    video.src = url;
                };
                xhr.send();
            }

            mainVideo.addEventListener("contextmenu", (e) => 
            {
                e.preventDefault();
            });

            video_player.addEventListener("mousemove", () => 
            {
                video_player.classList.add("active");
                if (tracks.length != 0)
                {
                    caption_text.classList.remove("active");
                }
                clearTimeout(ctrltimer);
                hideControls();
            });

            if (tracks.length == 0)
            {
                caption_labels.remove();
                captionsBtn.parentNode.remove();
            }


            // Creating thumbnails
            let preview_video = document.createElement('video');
            preview_video.preload = "metadata";
            preview_video.width = "500";
            preview_video.height = "300"
            preview_video.controls = true;
            preview_video.src = mainVideo.querySelector("source").src;
            preview_video.addEventListener("loadeddata", async function ()
            {
                preview_video.pause();

                let count = 1;
                let id = 1;
                let x = 0,
                y = 0;

                let array = [];

                let duration = parseInt(preview_video.duration);
                for (let i = 1; i <= duration; i++)
                {
                    array.push(i);
                }

                let canvas;

                let i, j;

                for (i = 0, j = array.length; i < j; i += horizontalItemCount)
                {
                    for (let startIndex of array.slice(i, i + horizontalItemCount))
                    {
                        let backgroundPositionX = x * thumbnailWidth;
                        let backgroundPositionY = y * thumbnailHeight;
                        let item = thumbnails.find((x) => x.id === id);

                        if (!item)
                        {
                            canvas = document.createElement("canvas");
                            canvas.width = thumbnailWidth * horizontalItemCount;
                            canvas.height = thumbnailHeight * verticalItemCount;
                            thumbnails.push(
                            {
                                id: id,
                                canvas: canvas,
                                sec: [
                                    {
                                        index: startIndex,
                                        backgroundPositionX: -backgroundPositionX,
                                        backgroundPositionY: -backgroundPositionY,
                                    },
                                ],
                            });
                        }
                        else
                        {
                            canvas = item.canvas;
                            item.sec.push(
                            {
                                index: startIndex,
                                backgroundPositionX: -backgroundPositionX,
                                backgroundPositionY: -backgroundPositionY,
                            });
                        }

                        let context = canvas.getContext("2d");
                        preview_video.currentTime = startIndex;
                        await new Promise(function (resolve)
                        {
                            let event = function ()
                            {
                                context.drawImage(
                                    preview_video,
                                    backgroundPositionX,
                                    backgroundPositionY,
                                    thumbnailWidth,
                                    thumbnailHeight
                                );
                                x++;

                                // removing duplicate events
                                preview_video.removeEventListener("canplay", event);
                                resolve();
                            };
                            preview_video.addEventListener("canplay", event);
                        });

                        // 1 thumbnail is generated completely
                        count++;
                    }

                    // reset x coordinate
                    x = 0;

                    // increase y coordinate
                    y++;

                    // checking for overflow
                    if (count > horizontalItemCount * verticalItemCount)
                    {
                        count = 1;
                        x = 0;
                        y = 0;
                        id++;
                    }
                }

                // looping through thumbnail list to update thumbnail
                thumbnails.forEach(function (item)
                {
                    // converting canvas to blob to get short url
                    item.canvas.toBlob((blob) => (item.data = URL.createObjectURL(blob)), "image/jpeg");

                    // deleting unused property
                    delete item.canvas;
                });
            });

        });