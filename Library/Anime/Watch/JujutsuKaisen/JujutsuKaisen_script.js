/*************************************************************
 * This is the script that contains all episode listings for each show
 * 
 * @author (Anyanwu Benedict Chukwuemeka)
 * @version (v0.01)
 *************************************************************/



    // 
    window.addEventListener("load", () => 
    {
        MoreEpFunction();
    });




    function MoreEpFunction()
    {
        // DEFINITIONS

            const moreEpBase = document.querySelector(".showlist_MoreEpBase");
            const moreEpInnerHTML = 
            ` 
                <div class="showlist_MoreEpBcg close_MoreEpOverlay"></div>
                <div class="showlist_MoreEpBdr">
                    <div class="showlist_MoreEpBox">
                        <div class="showlist_MoreEpCloseBox">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="showlist_MoreEpCloseIcon close_MoreEpOverlay" title="Close More Episodes">
                                <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/>
                            </svg>
                        </div>
                        <div class="showlist_MoreEpHeaderBdr">
                            <div class="showlist_MoreEpHeaderBox">
                                <div class="showlist_MoreEpHeaderText">Jujutsu Kaisen - S1</div>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="showlist_MoreEpHeaderIcon">
                                    <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/>
                                </svg>
                            </div>
                            <div class="showlist_MoreEpSelectorBdr">
                                <div class="showlist_MoreEpSelectorBox">
                                    <div class="showlist_MoreEpSelector active">Jujutsu Kaisen - S1</div>
                                    <div class="showlist_MoreEpSelector">Jujutsu Kaisen - S2</div>
                                </div>
                            </div>
                        </div>
                        <div class="showlist_MoreEpCtntBdr active">
                            <div class="showlist_MoreEpCtntBox">
                                <div class="showlist_epCardBdr">
                                    <a href="/Library/Anime/Watch/JujutsuKaisen/S1/Ep1.html" title="" class="showlist_epCardBox">
                                        <div class="showlist_epImgBox">
                                            <img src="/Library/Anime//Watch/JujutsuKaisen/img/1.jpg" alt="" class="showlist_epImg">
                                            <div class="showlist_epLengthBox">
                                                <p class="showlist_epLength">24m</p>
                                            </div>
                                            <div class="showlist_epCardHover">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="showlist_epCardHoverIcon">
                                                    <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/>
                                                </svg>
                                            </div>
                                        </div>
                                        <div class="showlist_epDetBdr">
                                            <div class="showlist_epDetBox">
                                                <h4 class="showlist_epDetTitle">Episode 1</h4>
                                                <div class="showlist_epDetShow">Jujutsu Kaisen</div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div class="showlist_epCardBdr">
                                    <a href="/Library/Anime/Watch/JujutsuKaisen/S1/Ep2.html" title="" class="showlist_epCardBox">
                                        <div class="showlist_epImgBox">
                                            <img src="/Library/Anime//Watch/JujutsuKaisen/img/1.jpg" alt="" class="showlist_epImg">
                                            <div class="showlist_epLengthBox">
                                                <p class="showlist_epLength">24m</p>
                                            </div>
                                            <div class="showlist_epCardHover">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="showlist_epCardHoverIcon">
                                                    <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/>
                                                </svg>
                                            </div>
                                        </div>
                                        <div class="showlist_epDetBdr">
                                            <div class="showlist_epDetBox">
                                                <h4 class="showlist_epDetTitle">Episode 2</h4>
                                                <div class="showlist_epDetShow">Jujutsu Kaisen</div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div class="showlist_epCardBdr">
                                    <a href="/Library/Anime/Watch/JujutsuKaisen/S1/Ep3.html" title="" class="showlist_epCardBox">
                                        <div class="showlist_epImgBox">
                                            <img src="/Library/Anime//Watch/JujutsuKaisen/img/1.jpg" alt="" class="showlist_epImg">
                                            <div class="showlist_epLengthBox">
                                                <p class="showlist_epLength">24m</p>
                                            </div>
                                            <div class="showlist_epCardHover">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="showlist_epCardHoverIcon">
                                                    <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/>
                                                </svg>
                                            </div>
                                        </div>
                                        <div class="showlist_epDetBdr">
                                            <div class="showlist_epDetBox">
                                                <h4 class="showlist_epDetTitle">Episode 3</h4>
                                                <div class="showlist_epDetShow">Jujutsu Kaisen</div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div class="showlist_epCardBdr">
                                    <a href="/Library/Anime/Watch/JujutsuKaisen/S1/Ep4.html" title="" class="showlist_epCardBox">
                                        <div class="showlist_epImgBox">
                                            <img src="/Library/Anime//Watch/JujutsuKaisen/img/1.jpg" alt="" class="showlist_epImg">
                                            <div class="showlist_epLengthBox">
                                                <p class="showlist_epLength">24m</p>
                                            </div>
                                            <div class="showlist_epCardHover">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="showlist_epCardHoverIcon">
                                                    <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/>
                                                </svg>
                                            </div>
                                        </div>
                                        <div class="showlist_epDetBdr">
                                            <div class="showlist_epDetBox">
                                                <h4 class="showlist_epDetTitle">Episode 4</h4>
                                                <div class="showlist_epDetShow">Jujutsu Kaisen</div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div class="showlist_epCardBdr">
                                    <a href="/Library/Anime/Watch/JujutsuKaisen/S1/Ep5.html" title="" class="showlist_epCardBox">
                                        <div class="showlist_epImgBox">
                                            <img src="/Library/Anime//Watch/JujutsuKaisen/img/1.jpg" alt="" class="showlist_epImg">
                                            <div class="showlist_epLengthBox">
                                                <p class="showlist_epLength">24m</p>
                                            </div>
                                            <div class="showlist_epCardHover">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="showlist_epCardHoverIcon">
                                                    <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/>
                                                </svg>
                                            </div>
                                        </div>
                                        <div class="showlist_epDetBdr">
                                            <div class="showlist_epDetBox">
                                                <h4 class="showlist_epDetTitle">Episode 5</h4>
                                                <div class="showlist_epDetShow">Jujutsu Kaisen</div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div class="showlist_epCardBdr">
                                    <a href="#" title="" class="showlist_epCardBox">
                                        <div class="showlist_epImgBox">
                                            <img src="/Library/Anime//Watch/JujutsuKaisen/img/1.jpg" alt="" class="showlist_epImg">
                                            <div class="showlist_epLengthBox">
                                                <p class="showlist_epLength">24m</p>
                                            </div>
                                            <div class="showlist_epCardHover">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="showlist_epCardHoverIcon">
                                                    <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/>
                                                </svg>
                                            </div>
                                        </div>
                                        <div class="showlist_epDetBdr">
                                            <div class="showlist_epDetBox">
                                                <h4 class="showlist_epDetTitle">Episode 6</h4>
                                                <div class="showlist_epDetShow">Jujutsu Kaisen</div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div class="showlist_epCardBdr">
                                    <a href="#" title="" class="showlist_epCardBox">
                                        <div class="showlist_epImgBox">
                                            <img src="/Library/Anime//Watch/JujutsuKaisen/img/1.jpg" alt="" class="showlist_epImg">
                                            <div class="showlist_epLengthBox">
                                                <p class="showlist_epLength">24m</p>
                                            </div>
                                            <div class="showlist_epCardHover">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="showlist_epCardHoverIcon">
                                                    <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/>
                                                </svg>
                                            </div>
                                        </div>
                                        <div class="showlist_epDetBdr">
                                            <div class="showlist_epDetBox">
                                                <h4 class="showlist_epDetTitle">Episode 7</h4>
                                                <div class="showlist_epDetShow">Jujutsu Kaisen</div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div class="showlist_epCardBdr">
                                    <a href="#" title="" class="showlist_epCardBox">
                                        <div class="showlist_epImgBox">
                                            <img src="/Library/Anime//Watch/JujutsuKaisen/img/1.jpg" alt="" class="showlist_epImg">
                                            <div class="showlist_epLengthBox">
                                                <p class="showlist_epLength">24m</p>
                                            </div>
                                            <div class="showlist_epCardHover">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="showlist_epCardHoverIcon">
                                                    <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/>
                                                </svg>
                                            </div>
                                        </div>
                                        <div class="showlist_epDetBdr">
                                            <div class="showlist_epDetBox">
                                                <h4 class="showlist_epDetTitle">Episode 8</h4>
                                                <div class="showlist_epDetShow">Jujutsu Kaisen</div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div class="showlist_epCardBdr">
                                    <a href="#" title="" class="showlist_epCardBox">
                                        <div class="showlist_epImgBox">
                                            <img src="/Library/Anime//Watch/JujutsuKaisen/img/1.jpg" alt="" class="showlist_epImg">
                                            <div class="showlist_epLengthBox">
                                                <p class="showlist_epLength">24m</p>
                                            </div>
                                            <div class="showlist_epCardHover">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="showlist_epCardHoverIcon">
                                                    <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/>
                                                </svg>
                                            </div>
                                        </div>
                                        <div class="showlist_epDetBdr">
                                            <div class="showlist_epDetBox">
                                                <h4 class="showlist_epDetTitle">Episode 9</h4>
                                                <div class="showlist_epDetShow">Jujutsu Kaisen</div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div class="showlist_epCardBdr">
                                    <a href="#" title="" class="showlist_epCardBox">
                                        <div class="showlist_epImgBox">
                                            <img src="/Library/Anime//Watch/JujutsuKaisen/img/1.jpg" alt="" class="showlist_epImg">
                                            <div class="showlist_epLengthBox">
                                                <p class="showlist_epLength">24m</p>
                                            </div>
                                            <div class="showlist_epCardHover">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="showlist_epCardHoverIcon">
                                                    <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/>
                                                </svg>
                                            </div>
                                        </div>
                                        <div class="showlist_epDetBdr">
                                            <div class="showlist_epDetBox">
                                                <h4 class="showlist_epDetTitle">Episode 10</h4>
                                                <div class="showlist_epDetShow">Jujutsu Kaisen</div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div class="showlist_epCardBdr">
                                    <a href="#" title="" class="showlist_epCardBox">
                                        <div class="showlist_epImgBox">
                                            <img src="/Library/Anime//Watch/JujutsuKaisen/img/1.jpg" alt="" class="showlist_epImg">
                                            <div class="showlist_epLengthBox">
                                                <p class="showlist_epLength">24m</p>
                                            </div>
                                            <div class="showlist_epCardHover">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="showlist_epCardHoverIcon">
                                                    <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/>
                                                </svg>
                                            </div>
                                        </div>
                                        <div class="showlist_epDetBdr">
                                            <div class="showlist_epDetBox">
                                                <h4 class="showlist_epDetTitle">Episode 11</h4>
                                                <div class="showlist_epDetShow">Jujutsu Kaisen</div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div class="showlist_epCardBdr">
                                    <a href="#" title="" class="showlist_epCardBox">
                                        <div class="showlist_epImgBox">
                                            <img src="/Library/Anime//Watch/JujutsuKaisen/img/1.jpg" alt="" class="showlist_epImg">
                                            <div class="showlist_epLengthBox">
                                                <p class="showlist_epLength">24m</p>
                                            </div>
                                            <div class="showlist_epCardHover">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="showlist_epCardHoverIcon">
                                                    <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/>
                                                </svg>
                                            </div>
                                        </div>
                                        <div class="showlist_epDetBdr">
                                            <div class="showlist_epDetBox">
                                                <h4 class="showlist_epDetTitle">Episode 12</h4>
                                                <div class="showlist_epDetShow">Jujutsu Kaisen</div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div class="showlist_epCardBdr">
                                    <a href="#" title="" class="showlist_epCardBox">
                                        <div class="showlist_epImgBox">
                                            <img src="/Library/Anime//Watch/JujutsuKaisen/img/1.jpg" alt="" class="showlist_epImg">
                                            <div class="showlist_epLengthBox">
                                                <p class="showlist_epLength">24m</p>
                                            </div>
                                            <div class="showlist_epCardHover">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="showlist_epCardHoverIcon">
                                                    <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/>
                                                </svg>
                                            </div>
                                        </div>
                                        <div class="showlist_epDetBdr">
                                            <div class="showlist_epDetBox">
                                                <h4 class="showlist_epDetTitle">Episode 13</h4>
                                                <div class="showlist_epDetShow">Jujutsu Kaisen</div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div class="showlist_epCardBdr">
                                    <a href="#" title="" class="showlist_epCardBox">
                                        <div class="showlist_epImgBox">
                                            <img src="/Library/Anime//Watch/JujutsuKaisen/img/1.jpg" alt="" class="showlist_epImg">
                                            <div class="showlist_epLengthBox">
                                                <p class="showlist_epLength">24m</p>
                                            </div>
                                            <div class="showlist_epCardHover">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="showlist_epCardHoverIcon">
                                                    <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/>
                                                </svg>
                                            </div>
                                        </div>
                                        <div class="showlist_epDetBdr">
                                            <div class="showlist_epDetBox">
                                                <h4 class="showlist_epDetTitle">Episode 14</h4>
                                                <div class="showlist_epDetShow">Jujutsu Kaisen</div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div class="showlist_epCardBdr">
                                    <a href="#" title="" class="showlist_epCardBox">
                                        <div class="showlist_epImgBox">
                                            <img src="/Library/Anime//Watch/JujutsuKaisen/img/1.jpg" alt="" class="showlist_epImg">
                                            <div class="showlist_epLengthBox">
                                                <p class="showlist_epLength">24m</p>
                                            </div>
                                            <div class="showlist_epCardHover">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="showlist_epCardHoverIcon">
                                                    <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/>
                                                </svg>
                                            </div>
                                        </div>
                                        <div class="showlist_epDetBdr">
                                            <div class="showlist_epDetBox">
                                                <h4 class="showlist_epDetTitle">Episode 15</h4>
                                                <div class="showlist_epDetShow">Jujutsu Kaisen</div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div class="showlist_epCardBdr">
                                    <a href="#" title="" class="showlist_epCardBox">
                                        <div class="showlist_epImgBox">
                                            <img src="/Library/Anime//Watch/JujutsuKaisen/img/1.jpg" alt="" class="showlist_epImg">
                                            <div class="showlist_epLengthBox">
                                                <p class="showlist_epLength">24m</p>
                                            </div>
                                            <div class="showlist_epCardHover">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="showlist_epCardHoverIcon">
                                                    <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/>
                                                </svg>
                                            </div>
                                        </div>
                                        <div class="showlist_epDetBdr">
                                            <div class="showlist_epDetBox">
                                                <h4 class="showlist_epDetTitle">Episode 16</h4>
                                                <div class="showlist_epDetShow">Jujutsu Kaisen</div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div class="showlist_epCardBdr">
                                    <a href="#" title="" class="showlist_epCardBox">
                                        <div class="showlist_epImgBox">
                                            <img src="/Library/Anime//Watch/JujutsuKaisen/img/1.jpg" alt="" class="showlist_epImg">
                                            <div class="showlist_epLengthBox">
                                                <p class="showlist_epLength">24m</p>
                                            </div>
                                            <div class="showlist_epCardHover">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="showlist_epCardHoverIcon">
                                                    <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/>
                                                </svg>
                                            </div>
                                        </div>
                                        <div class="showlist_epDetBdr">
                                            <div class="showlist_epDetBox">
                                                <h4 class="showlist_epDetTitle">Episode 17</h4>
                                                <div class="showlist_epDetShow">Jujutsu Kaisen</div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div class="showlist_epCardBdr">
                                    <a href="#" title="" class="showlist_epCardBox">
                                        <div class="showlist_epImgBox">
                                            <img src="/Library/Anime//Watch/JujutsuKaisen/img/1.jpg" alt="" class="showlist_epImg">
                                            <div class="showlist_epLengthBox">
                                                <p class="showlist_epLength">24m</p>
                                            </div>
                                            <div class="showlist_epCardHover">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="showlist_epCardHoverIcon">
                                                    <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/>
                                                </svg>
                                            </div>
                                        </div>
                                        <div class="showlist_epDetBdr">
                                            <div class="showlist_epDetBox">
                                                <h4 class="showlist_epDetTitle">Episode 18</h4>
                                                <div class="showlist_epDetShow">Jujutsu Kaisen</div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div class="showlist_epCardBdr">
                                    <a href="#" title="" class="showlist_epCardBox">
                                        <div class="showlist_epImgBox">
                                            <img src="/Library/Anime//Watch/JujutsuKaisen/img/1.jpg" alt="" class="showlist_epImg">
                                            <div class="showlist_epLengthBox">
                                                <p class="showlist_epLength">24m</p>
                                            </div>
                                            <div class="showlist_epCardHover">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="showlist_epCardHoverIcon">
                                                    <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/>
                                                </svg>
                                            </div>
                                        </div>
                                        <div class="showlist_epDetBdr">
                                            <div class="showlist_epDetBox">
                                                <h4 class="showlist_epDetTitle">Episode 19</h4>
                                                <div class="showlist_epDetShow">Jujutsu Kaisen</div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div class="showlist_epCardBdr">
                                    <a href="#" title="" class="showlist_epCardBox">
                                        <div class="showlist_epImgBox">
                                            <img src="/Library/Anime//Watch/JujutsuKaisen/img/1.jpg" alt="" class="showlist_epImg">
                                            <div class="showlist_epLengthBox">
                                                <p class="showlist_epLength">24m</p>
                                            </div>
                                            <div class="showlist_epCardHover">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="showlist_epCardHoverIcon">
                                                    <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/>
                                                </svg>
                                            </div>
                                        </div>
                                        <div class="showlist_epDetBdr">
                                            <div class="showlist_epDetBox">
                                                <h4 class="showlist_epDetTitle">Episode 20</h4>
                                                <div class="showlist_epDetShow">Jujutsu Kaisen</div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div class="showlist_epCardBdr">
                                    <a href="#" title="" class="showlist_epCardBox">
                                        <div class="showlist_epImgBox">
                                            <img src="/Library/Anime//Watch/JujutsuKaisen/img/1.jpg" alt="" class="showlist_epImg">
                                            <div class="showlist_epLengthBox">
                                                <p class="showlist_epLength">24m</p>
                                            </div>
                                            <div class="showlist_epCardHover">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="showlist_epCardHoverIcon">
                                                    <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/>
                                                </svg>
                                            </div>
                                        </div>
                                        <div class="showlist_epDetBdr">
                                            <div class="showlist_epDetBox">
                                                <h4 class="showlist_epDetTitle">Episode 21</h4>
                                                <div class="showlist_epDetShow">Jujutsu Kaisen</div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div class="showlist_epCardBdr">
                                    <a href="#" title="" class="showlist_epCardBox">
                                        <div class="showlist_epImgBox">
                                            <img src="/Library/Anime//Watch/JujutsuKaisen/img/1.jpg" alt="" class="showlist_epImg">
                                            <div class="showlist_epLengthBox">
                                                <p class="showlist_epLength">24m</p>
                                            </div>
                                            <div class="showlist_epCardHover">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="showlist_epCardHoverIcon">
                                                    <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/>
                                                </svg>
                                            </div>
                                        </div>
                                        <div class="showlist_epDetBdr">
                                            <div class="showlist_epDetBox">
                                                <h4 class="showlist_epDetTitle">Episode 22</h4>
                                                <div class="showlist_epDetShow">Jujutsu Kaisen</div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div class="showlist_epCardBdr">
                                    <a href="#" title="" class="showlist_epCardBox">
                                        <div class="showlist_epImgBox">
                                            <img src="/Library/Anime//Watch/JujutsuKaisen/img/1.jpg" alt="" class="showlist_epImg">
                                            <div class="showlist_epLengthBox">
                                                <p class="showlist_epLength">24m</p>
                                            </div>
                                            <div class="showlist_epCardHover">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="showlist_epCardHoverIcon">
                                                    <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/>
                                                </svg>
                                            </div>
                                        </div>
                                        <div class="showlist_epDetBdr">
                                            <div class="showlist_epDetBox">
                                                <h4 class="showlist_epDetTitle">Episode 23</h4>
                                                <div class="showlist_epDetShow">Jujutsu Kaisen</div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div class="showlist_epCardBdr">
                                    <a href="#" title="" class="showlist_epCardBox">
                                        <div class="showlist_epImgBox">
                                            <img src="/Library/Anime//Watch/JujutsuKaisen/img/1.jpg" alt="" class="showlist_epImg">
                                            <div class="showlist_epLengthBox">
                                                <p class="showlist_epLength">24m</p>
                                            </div>
                                            <div class="showlist_epCardHover">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="showlist_epCardHoverIcon">
                                                    <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/>
                                                </svg>
                                            </div>
                                        </div>
                                        <div class="showlist_epDetBdr">
                                            <div class="showlist_epDetBox">
                                                <h4 class="showlist_epDetTitle">Episode 24</h4>
                                                <div class="showlist_epDetShow">Jujutsu Kaisen</div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="showlist_MoreEpCtntBdr inactive">
                            <div class="showlist_MoreEpCtntBox">
                                <div class="showlist_epCardBdr">
                                    <a href="#" title="" class="showlist_epCardBox">
                                        <div class="showlist_epImgBox">
                                            <img src="/Library/Anime//Watch/JujutsuKaisen/img/1.jpg" alt="" class="showlist_epImg">
                                            <div class="showlist_epLengthBox">
                                                <p class="showlist_epLength">24m</p>
                                            </div>
                                            <div class="showlist_epCardHover">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="showlist_epCardHoverIcon">
                                                    <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/>
                                                </svg>
                                            </div>
                                        </div>
                                        <div class="showlist_epDetBdr">
                                            <div class="showlist_epDetBox">
                                                <h4 class="showlist_epDetTitle">Episode 1</h4>
                                                <div class="showlist_epDetShow">Jujutsu Kaisen</div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div class="showlist_epCardBdr">
                                    <a href="#" title="" class="showlist_epCardBox">
                                        <div class="showlist_epImgBox">
                                            <img src="/Library/Anime//Watch/JujutsuKaisen/img/1.jpg" alt="" class="showlist_epImg">
                                            <div class="showlist_epLengthBox">
                                                <p class="showlist_epLength">24m</p>
                                            </div>
                                            <div class="showlist_epCardHover">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="showlist_epCardHoverIcon">
                                                    <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/>
                                                </svg>
                                            </div>
                                        </div>
                                        <div class="showlist_epDetBdr">
                                            <div class="showlist_epDetBox">
                                                <h4 class="showlist_epDetTitle">Episode 2</h4>
                                                <div class="showlist_epDetShow">Jujutsu Kaisen</div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div class="showlist_epCardBdr">
                                    <a href="#" title="" class="showlist_epCardBox">
                                        <div class="showlist_epImgBox">
                                            <img src="/Library/Anime//Watch/JujutsuKaisen/img/1.jpg" alt="" class="showlist_epImg">
                                            <div class="showlist_epLengthBox">
                                                <p class="showlist_epLength">24m</p>
                                            </div>
                                            <div class="showlist_epCardHover">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="showlist_epCardHoverIcon">
                                                    <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/>
                                                </svg>
                                            </div>
                                        </div>
                                        <div class="showlist_epDetBdr">
                                            <div class="showlist_epDetBox">
                                                <h4 class="showlist_epDetTitle">Episode 3</h4>
                                                <div class="showlist_epDetShow">Jujutsu Kaisen</div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div class="showlist_epCardBdr">
                                    <a href="#" title="" class="showlist_epCardBox">
                                        <div class="showlist_epImgBox">
                                            <img src="/Library/Anime//Watch/JujutsuKaisen/img/1.jpg" alt="" class="showlist_epImg">
                                            <div class="showlist_epLengthBox">
                                                <p class="showlist_epLength">24m</p>
                                            </div>
                                            <div class="showlist_epCardHover">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="showlist_epCardHoverIcon">
                                                    <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/>
                                                </svg>
                                            </div>
                                        </div>
                                        <div class="showlist_epDetBdr">
                                            <div class="showlist_epDetBox">
                                                <h4 class="showlist_epDetTitle">Episode 4</h4>
                                                <div class="showlist_epDetShow">Jujutsu Kaisen</div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div class="showlist_epCardBdr">
                                    <a href="#" title="" class="showlist_epCardBox">
                                        <div class="showlist_epImgBox">
                                            <img src="/Library/Anime//Watch/JujutsuKaisen/img/1.jpg" alt="" class="showlist_epImg">
                                            <div class="showlist_epLengthBox">
                                                <p class="showlist_epLength">24m</p>
                                            </div>
                                            <div class="showlist_epCardHover">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="showlist_epCardHoverIcon">
                                                    <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/>
                                                </svg>
                                            </div>
                                        </div>
                                        <div class="showlist_epDetBdr">
                                            <div class="showlist_epDetBox">
                                                <h4 class="showlist_epDetTitle">Episode 5</h4>
                                                <div class="showlist_epDetShow">Jujutsu Kaisen</div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div class="showlist_epCardBdr">
                                    <a href="#" title="" class="showlist_epCardBox">
                                        <div class="showlist_epImgBox">
                                            <img src="/Library/Anime//Watch/JujutsuKaisen/img/1.jpg" alt="" class="showlist_epImg">
                                            <div class="showlist_epLengthBox">
                                                <p class="showlist_epLength">24m</p>
                                            </div>
                                            <div class="showlist_epCardHover">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="showlist_epCardHoverIcon">
                                                    <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/>
                                                </svg>
                                            </div>
                                        </div>
                                        <div class="showlist_epDetBdr">
                                            <div class="showlist_epDetBox">
                                                <h4 class="showlist_epDetTitle">Episode 6</h4>
                                                <div class="showlist_epDetShow">Jujutsu Kaisen</div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div class="showlist_epCardBdr">
                                    <a href="#" title="" class="showlist_epCardBox">
                                        <div class="showlist_epImgBox">
                                            <img src="/Library/Anime//Watch/JujutsuKaisen/img/1.jpg" alt="" class="showlist_epImg">
                                            <div class="showlist_epLengthBox">
                                                <p class="showlist_epLength">24m</p>
                                            </div>
                                            <div class="showlist_epCardHover">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="showlist_epCardHoverIcon">
                                                    <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/>
                                                </svg>
                                            </div>
                                        </div>
                                        <div class="showlist_epDetBdr">
                                            <div class="showlist_epDetBox">
                                                <h4 class="showlist_epDetTitle">Episode 7</h4>
                                                <div class="showlist_epDetShow">Jujutsu Kaisen</div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div class="showlist_epCardBdr">
                                    <a href="#" title="" class="showlist_epCardBox">
                                        <div class="showlist_epImgBox">
                                            <img src="/Library/Anime//Watch/JujutsuKaisen/img/1.jpg" alt="" class="showlist_epImg">
                                            <div class="showlist_epLengthBox">
                                                <p class="showlist_epLength">24m</p>
                                            </div>
                                            <div class="showlist_epCardHover">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="showlist_epCardHoverIcon">
                                                    <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/>
                                                </svg>
                                            </div>
                                        </div>
                                        <div class="showlist_epDetBdr">
                                            <div class="showlist_epDetBox">
                                                <h4 class="showlist_epDetTitle">Episode 8</h4>
                                                <div class="showlist_epDetShow">Jujutsu Kaisen</div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div class="showlist_epCardBdr">
                                    <a href="#" title="" class="showlist_epCardBox">
                                        <div class="showlist_epImgBox">
                                            <img src="/Library/Anime//Watch/JujutsuKaisen/img/1.jpg" alt="" class="showlist_epImg">
                                            <div class="showlist_epLengthBox">
                                                <p class="showlist_epLength">24m</p>
                                            </div>
                                            <div class="showlist_epCardHover">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="showlist_epCardHoverIcon">
                                                    <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/>
                                                </svg>
                                            </div>
                                        </div>
                                        <div class="showlist_epDetBdr">
                                            <div class="showlist_epDetBox">
                                                <h4 class="showlist_epDetTitle">Episode 9</h4>
                                                <div class="showlist_epDetShow">Jujutsu Kaisen</div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div class="showlist_epCardBdr">
                                    <a href="#" title="" class="showlist_epCardBox">
                                        <div class="showlist_epImgBox">
                                            <img src="/Library/Anime//Watch/JujutsuKaisen/img/1.jpg" alt="" class="showlist_epImg">
                                            <div class="showlist_epLengthBox">
                                                <p class="showlist_epLength">24m</p>
                                            </div>
                                            <div class="showlist_epCardHover">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="showlist_epCardHoverIcon">
                                                    <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/>
                                                </svg>
                                            </div>
                                        </div>
                                        <div class="showlist_epDetBdr">
                                            <div class="showlist_epDetBox">
                                                <h4 class="showlist_epDetTitle">Episode 10</h4>
                                                <div class="showlist_epDetShow">Jujutsu Kaisen</div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div class="showlist_epCardBdr">
                                    <a href="#" title="" class="showlist_epCardBox">
                                        <div class="showlist_epImgBox">
                                            <img src="/Library/Anime//Watch/JujutsuKaisen/img/1.jpg" alt="" class="showlist_epImg">
                                            <div class="showlist_epLengthBox">
                                                <p class="showlist_epLength">24m</p>
                                            </div>
                                            <div class="showlist_epCardHover">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="showlist_epCardHoverIcon">
                                                    <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/>
                                                </svg>
                                            </div>
                                        </div>
                                        <div class="showlist_epDetBdr">
                                            <div class="showlist_epDetBox">
                                                <h4 class="showlist_epDetTitle">Episode 11</h4>
                                                <div class="showlist_epDetShow">Jujutsu Kaisen</div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div class="showlist_epCardBdr">
                                    <a href="#" title="" class="showlist_epCardBox">
                                        <div class="showlist_epImgBox">
                                            <img src="/Library/Anime//Watch/JujutsuKaisen/img/1.jpg" alt="" class="showlist_epImg">
                                            <div class="showlist_epLengthBox">
                                                <p class="showlist_epLength">24m</p>
                                            </div>
                                            <div class="showlist_epCardHover">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="showlist_epCardHoverIcon">
                                                    <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/>
                                                </svg>
                                            </div>
                                        </div>
                                        <div class="showlist_epDetBdr">
                                            <div class="showlist_epDetBox">
                                                <h4 class="showlist_epDetTitle">Episode 12</h4>
                                                <div class="showlist_epDetShow">Jujutsu Kaisen</div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div class="showlist_epCardBdr">
                                    <a href="#" title="" class="showlist_epCardBox">
                                        <div class="showlist_epImgBox">
                                            <img src="/Library/Anime//Watch/JujutsuKaisen/img/1.jpg" alt="" class="showlist_epImg">
                                            <div class="showlist_epLengthBox">
                                                <p class="showlist_epLength">24m</p>
                                            </div>
                                            <div class="showlist_epCardHover">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="showlist_epCardHoverIcon">
                                                    <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/>
                                                </svg>
                                            </div>
                                        </div>
                                        <div class="showlist_epDetBdr">
                                            <div class="showlist_epDetBox">
                                                <h4 class="showlist_epDetTitle">Episode 13</h4>
                                                <div class="showlist_epDetShow">Jujutsu Kaisen</div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div class="showlist_epCardBdr">
                                    <a href="#" title="" class="showlist_epCardBox">
                                        <div class="showlist_epImgBox">
                                            <img src="/Library/Anime//Watch/JujutsuKaisen/img/1.jpg" alt="" class="showlist_epImg">
                                            <div class="showlist_epLengthBox">
                                                <p class="showlist_epLength">24m</p>
                                            </div>
                                            <div class="showlist_epCardHover">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="showlist_epCardHoverIcon">
                                                    <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/>
                                                </svg>
                                            </div>
                                        </div>
                                        <div class="showlist_epDetBdr">
                                            <div class="showlist_epDetBox">
                                                <h4 class="showlist_epDetTitle">Episode 14</h4>
                                                <div class="showlist_epDetShow">Jujutsu Kaisen</div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div class="showlist_epCardBdr">
                                    <a href="#" title="" class="showlist_epCardBox">
                                        <div class="showlist_epImgBox">
                                            <img src="/Library/Anime//Watch/JujutsuKaisen/img/1.jpg" alt="" class="showlist_epImg">
                                            <div class="showlist_epLengthBox">
                                                <p class="showlist_epLength">24m</p>
                                            </div>
                                            <div class="showlist_epCardHover">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="showlist_epCardHoverIcon">
                                                    <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/>
                                                </svg>
                                            </div>
                                        </div>
                                        <div class="showlist_epDetBdr">
                                            <div class="showlist_epDetBox">
                                                <h4 class="showlist_epDetTitle">Episode 15</h4>
                                                <div class="showlist_epDetShow">Jujutsu Kaisen</div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div class="showlist_epCardBdr">
                                    <a href="#" title="" class="showlist_epCardBox">
                                        <div class="showlist_epImgBox">
                                            <img src="/Library/Anime//Watch/JujutsuKaisen/img/1.jpg" alt="" class="showlist_epImg">
                                            <div class="showlist_epLengthBox">
                                                <p class="showlist_epLength">24m</p>
                                            </div>
                                            <div class="showlist_epCardHover">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="showlist_epCardHoverIcon">
                                                    <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/>
                                                </svg>
                                            </div>
                                        </div>
                                        <div class="showlist_epDetBdr">
                                            <div class="showlist_epDetBox">
                                                <h4 class="showlist_epDetTitle">Episode 16</h4>
                                                <div class="showlist_epDetShow">Jujutsu Kaisen</div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div class="showlist_epCardBdr">
                                    <a href="#" title="" class="showlist_epCardBox">
                                        <div class="showlist_epImgBox">
                                            <img src="/Library/Anime//Watch/JujutsuKaisen/img/1.jpg" alt="" class="showlist_epImg">
                                            <div class="showlist_epLengthBox">
                                                <p class="showlist_epLength">24m</p>
                                            </div>
                                            <div class="showlist_epCardHover">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="showlist_epCardHoverIcon">
                                                    <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/>
                                                </svg>
                                            </div>
                                        </div>
                                        <div class="showlist_epDetBdr">
                                            <div class="showlist_epDetBox">
                                                <h4 class="showlist_epDetTitle">Episode 17</h4>
                                                <div class="showlist_epDetShow">Jujutsu Kaisen</div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div class="showlist_epCardBdr">
                                    <a href="#" title="" class="showlist_epCardBox">
                                        <div class="showlist_epImgBox">
                                            <img src="/Library/Anime//Watch/JujutsuKaisen/img/1.jpg" alt="" class="showlist_epImg">
                                            <div class="showlist_epLengthBox">
                                                <p class="showlist_epLength">24m</p>
                                            </div>
                                            <div class="showlist_epCardHover">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="showlist_epCardHoverIcon">
                                                    <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/>
                                                </svg>
                                            </div>
                                        </div>
                                        <div class="showlist_epDetBdr">
                                            <div class="showlist_epDetBox">
                                                <h4 class="showlist_epDetTitle">Episode 18</h4>
                                                <div class="showlist_epDetShow">Jujutsu Kaisen</div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div class="showlist_epCardBdr">
                                    <a href="#" title="" class="showlist_epCardBox">
                                        <div class="showlist_epImgBox">
                                            <img src="/Library/Anime//Watch/JujutsuKaisen/img/1.jpg" alt="" class="showlist_epImg">
                                            <div class="showlist_epLengthBox">
                                                <p class="showlist_epLength">24m</p>
                                            </div>
                                            <div class="showlist_epCardHover">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="showlist_epCardHoverIcon">
                                                    <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/>
                                                </svg>
                                            </div>
                                        </div>
                                        <div class="showlist_epDetBdr">
                                            <div class="showlist_epDetBox">
                                                <h4 class="showlist_epDetTitle">Episode 19</h4>
                                                <div class="showlist_epDetShow">Jujutsu Kaisen</div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div class="showlist_epCardBdr">
                                    <a href="#" title="" class="showlist_epCardBox">
                                        <div class="showlist_epImgBox">
                                            <img src="/Library/Anime//Watch/JujutsuKaisen/img/1.jpg" alt="" class="showlist_epImg">
                                            <div class="showlist_epLengthBox">
                                                <p class="showlist_epLength">24m</p>
                                            </div>
                                            <div class="showlist_epCardHover">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="showlist_epCardHoverIcon">
                                                    <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/>
                                                </svg>
                                            </div>
                                        </div>
                                        <div class="showlist_epDetBdr">
                                            <div class="showlist_epDetBox">
                                                <h4 class="showlist_epDetTitle">Episode 20</h4>
                                                <div class="showlist_epDetShow">Jujutsu Kaisen</div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div class="showlist_epCardBdr">
                                    <a href="#" title="" class="showlist_epCardBox">
                                        <div class="showlist_epImgBox">
                                            <img src="/Library/Anime//Watch/JujutsuKaisen/img/1.jpg" alt="" class="showlist_epImg">
                                            <div class="showlist_epLengthBox">
                                                <p class="showlist_epLength">24m</p>
                                            </div>
                                            <div class="showlist_epCardHover">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="showlist_epCardHoverIcon">
                                                    <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/>
                                                </svg>
                                            </div>
                                        </div>
                                        <div class="showlist_epDetBdr">
                                            <div class="showlist_epDetBox">
                                                <h4 class="showlist_epDetTitle">Episode 21</h4>
                                                <div class="showlist_epDetShow">Jujutsu Kaisen</div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div class="showlist_epCardBdr">
                                    <a href="#" title="" class="showlist_epCardBox">
                                        <div class="showlist_epImgBox">
                                            <img src="/Library/Anime//Watch/JujutsuKaisen/img/1.jpg" alt="" class="showlist_epImg">
                                            <div class="showlist_epLengthBox">
                                                <p class="showlist_epLength">24m</p>
                                            </div>
                                            <div class="showlist_epCardHover">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="showlist_epCardHoverIcon">
                                                    <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/>
                                                </svg>
                                            </div>
                                        </div>
                                        <div class="showlist_epDetBdr">
                                            <div class="showlist_epDetBox">
                                                <h4 class="showlist_epDetTitle">Episode 22</h4>
                                                <div class="showlist_epDetShow">Jujutsu Kaisen</div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div class="showlist_epCardBdr">
                                    <a href="#" title="" class="showlist_epCardBox">
                                        <div class="showlist_epImgBox">
                                            <img src="/Library/Anime//Watch/JujutsuKaisen/img/1.jpg" alt="" class="showlist_epImg">
                                            <div class="showlist_epLengthBox">
                                                <p class="showlist_epLength">24m</p>
                                            </div>
                                            <div class="showlist_epCardHover">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="showlist_epCardHoverIcon">
                                                    <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/>
                                                </svg>
                                            </div>
                                        </div>
                                        <div class="showlist_epDetBdr">
                                            <div class="showlist_epDetBox">
                                                <h4 class="showlist_epDetTitle">Episode 23</h4>
                                                <div class="showlist_epDetShow">Jujutsu Kaisen</div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div class="showlist_epCardBdr">
                                    <a href="#" title="" class="showlist_epCardBox">
                                        <div class="showlist_epImgBox">
                                            <img src="/Library/Anime//Watch/JujutsuKaisen/img/1.jpg" alt="" class="showlist_epImg">
                                            <div class="showlist_epLengthBox">
                                                <p class="showlist_epLength">24m</p>
                                            </div>
                                            <div class="showlist_epCardHover">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="showlist_epCardHoverIcon">
                                                    <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/>
                                                </svg>
                                            </div>
                                        </div>
                                        <div class="showlist_epDetBdr">
                                            <div class="showlist_epDetBox">
                                                <h4 class="showlist_epDetTitle">Episode 24</h4>
                                                <div class="showlist_epDetShow">Jujutsu Kaisen</div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `;
            moreEpBase.innerHTML = moreEpInnerHTML;
            const openMoreEpOverlay = document.querySelectorAll(".open_MoreEpOverlay");
            const closeMoreEpOverlay = document.querySelectorAll(".close_MoreEpOverlay");
            const moreEpHeaderBox = document.querySelector(".showlist_MoreEpHeaderBox");
            const moreEpHeaderText = document.querySelector(".showlist_MoreEpHeaderText");
            const moreEpSeasonSelectorBdr = document.querySelector(".showlist_MoreEpSelectorBdr");
            const moreEpSeasonSelector = document.querySelectorAll(".showlist_MoreEpSelector");
            const moreEpSelectorBdr = document.querySelector(".showlist_MoreEpSelectorBdr");
            const moreEpSelectors = document.querySelectorAll(".showlist_MoreEpHeaderBdr");
            const moreEpCtntBdr = document.querySelectorAll(".showlist_MoreEpCtntBdr");
            const moreEpCtntCardBdr = document.querySelectorAll(".showlist_epCardBdr");




        // MORE EPSIODES OVERLAY


            // open the Overlay modal
            openMoreEpOverlay.forEach(btn => 
            {
                // preload.style.display = "flex";
                btn.addEventListener("click" , () => 
                {
                    moreEpBase.classList.add("active");
                    documentBody.classList.add("bodystop");
                });
            });



            // Close the Overlay modal
            closeMoreEpOverlay.forEach(btn => 
            {
                btn.addEventListener("click" , () => 
                {
                    moreEpBase.classList.remove("active");
                    documentBody.classList.remove("bodystop");
                });
            });

            // Open season selctor
            moreEpHeaderBox.addEventListener("click" , () => 
            {
                moreEpSeasonSelectorBdr.classList.toggle("active");
            });

            // Close season selector
            document.addEventListener("click" , () => 
            {
                if((moreEpHeaderBox.matches(":hover")))
                {
                    return;
                }
                moreEpSeasonSelectorBdr.classList.remove("active");
            });

            // Select season
            moreEpSeasonSelector.forEach((selector, s) => 
            {
                selector.addEventListener("click" , () => 
                {
                    moreEpHeaderText.textContent = selector.textContent;
                    moreEpCtntBdr.forEach(ctnt => 
                    { 
                        ctnt.classList.remove("active");
                        ctnt.classList.add("inactive");
                    });
                    moreEpSeasonSelector.forEach(one => 
                    { 
                        one.classList.remove("active");
                    });
                    moreEpCtntBdr[s].classList.remove("inactive");
                    moreEpCtntBdr[s].classList.add("active");
                    selector.classList.add("active");

                    moreEpSeasonSelectorBdr.classList.remove("active");
                });
            });

            // Setting episode card atrributes
            moreEpCtntCardBdr.forEach(cardBdr => 
            {
                const cardlink = cardBdr.querySelector(".showlist_epCardBox");
                const cardImage = cardBdr.querySelector(".showlist_epImg");
                const cardEpTitle = cardBdr.querySelector(".showlist_epDetTitle");
                const cardShowName = cardBdr.querySelector(".showlist_epDetShow");

                cardlink.title = "Watch " + cardEpTitle.textContent + " of " + cardShowName.textContent ;
                cardImage.alt = "Image of " + cardShowName.textContent + cardEpTitle.textContent;
            });
    }