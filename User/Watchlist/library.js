/***************************************************************
 * This will serve as a data library for the Watchlist page
 * 
 * Watch Status (wl_itemWatchStatus)
 * 0 - All (Never assigned to a show)
 * 1 - Planned
 * 2 - Watching
 * 3 - On-hold
 * 4 - Completed
 * 5 - Dropped
 * 
 * @author (Anyanwu Benedict Chukwuemeka)
 * @version (v0.01)
 *
****************************************************************/

const watchlistInventory = 
[
    {
        wl_name: `The Greatest Anime Shows`,
        wl_updated: `Sep 12, 2024`,
        wl_bcg: `/Library/TV/Watch/OnePunchMan/img/2.jpg`,
        wl_desc: `In this watchlist lies some of the greatest anime shows to ever air since the day anime was first introduced to the public.`,
        wl_items:
        [
            {
                wl_itemId: `/Library.html?info=JujutsuKaisen`,
                wl_itemWatchStatus: 1,
            },
            {
                wl_itemId: `/Library.html?info=OnePiece`,
                wl_itemWatchStatus: 2,
            },
            {
                wl_itemId: `/Library.html?info=Naruto`,
                wl_itemWatchStatus: 3,
            },
            {
                wl_itemId: `/Library.html?info=DemonSlayer`,
                wl_itemWatchStatus: 4,
            },
            {
                wl_itemId: `/Library.html?info=OnePunchMan`,
                wl_itemWatchStatus: 5,
            },
            {
                wl_itemId: `/Library.html?info=FullmetalAlchemistBrotherhood`,
                wl_itemWatchStatus: 1,
            },
            {
                wl_itemId: `/Library.html?info=AttackOnTitan`,
                wl_itemWatchStatus: 2,
            },
        ],
    },
    {
        wl_name: `Fullmetal Collection`,
        wl_updated: `Oct 1, 2024`,
        wl_bcg: `/Library/TV/Watch/FullmetalAlchemistBrotherhood/img/2.jpg`,
        wl_desc: `A collection of all the Fullmetal Shows.`,
        wl_items:
        [
            {
                wl_itemId: `/Library.html?info=FullmetalPanic`,
                wl_itemWatchStatus: 1,
            },
            {
                wl_itemId: `/Library.html?info=FullmetalAlchemist`,
                wl_itemWatchStatus: 2,
            },
            {
                wl_itemId: `/Library.html?info=FullmetalAlchemistBrotherhood`,
                wl_itemWatchStatus: 3,
            },
        ],
    },
    {
        wl_name: `Intriguing Classics`,
        wl_updated: `March 13, 2024`,
        wl_bcg: `/Library/TV/Watch/OnePiece/img/2.jpg`,
        wl_desc: `Compiled in this watchlist are some of the best classics in the anime universe.`,
        wl_items:
        [
            {
                wl_itemId: `/Library.html?info=OnePiece`,
                wl_itemWatchStatus: 1,
            },
            {
                wl_itemId: `/Library.html?info=Naruto`,
                wl_itemWatchStatus: 2,
            },
        ],
    },
];