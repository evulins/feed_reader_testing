/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */

        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        /* This tests loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        it('has defined URL and the URL is not empty', function() {
            allFeeds.forEach(function(feed) {
                expect(feed.url).toBeDefined();
                expect(feed.url).not.toBe(null);
            });
        });

        /* This tests loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        it('has defined name and the name is not empty', function() {
            allFeeds.forEach(function(feed) {
                expect(feed.name).toBeDefined();
                expect(feed.name).not.toBe(null);
            });
        });
    });

/* This suite is all about menu slider

        /* This test ensures the menu element is
         * hidden by default.
         */
    describe('The menu', function() {
        var body = $('body');
        var icon = $('.menu-icon-link');
        it('is hidden by default', function() {
            expect(body.hasClass('menu-hidden')).toBe(true);
            });

        /* This test ensures the menu changes
          * visibility when the menu icon is clicked.
          */
          it('changes visibility when the menu icon is clicked', function() {
            icon.trigger('click');
            expect(body.hasClass('menu-hidden')).toBe(false);
            icon.trigger('click');
            expect(body.hasClass('menu-hidden')).toBe(true);
          });
    });

   /* This suite is all about "Initial Entries" */

        /* This test ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         */
    describe('Initial Entries', function() {
        beforeEach(function(done) {
            loadFeed(0, done);
        });
             
        it('has an element in the feed container', function() {
            expect($('.entry').length).toBeGreaterThan(0);
        });
    });

    /* This test is all about content in "New Feed Selection" */

        /* This test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         */
    describe('New Feed Selection', function() {
        var feedContent;
        var newFeed;

        beforeEach(function(done) {
            loadFeed(0, function() {
                feedContent = $('.feed').html();
                loadFeed(1, done);
            });
        });

        it('changes the content', function() {
            newFeed = $('.feed').html();
            expect(feedContent).not.toBe(newFeed);
        });
    });
}());
