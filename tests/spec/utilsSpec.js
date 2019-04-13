describe('Utils.js', function() {
    beforeEach(function(){
        numCheck = new checkHeights();
        letarray = new lettersplit();
    });
    describe('Contains 2 functions',function(){
        it("that should exist", function(){
            expect(numCheck).toBeDefined();
            expect(letarray).toBeDefined();
        });
       
    
        describe('One Should be able to check and compare heights of elements', function(){
            
            it("If the current height is 42 and the next elements height is  40, it should return 42", function(){
                numCheck.checkHeight(42,40);
                expect(numCheck.value).toBe(42);
            });
            it("If the current height is 18 and the next elements height is  28, it should return 28", function(){
                numCheck.checkHeight(18,28);
                expect(numCheck.value).toBe(28);
            });
            
            
        });
        describe('The other splits a string into an array', function(){
            it('Should have a string', function(){
                expect(typeof(letarray.string)).toBe("string");
            });
            it('that should contain "abcdefghijklmnopqrstuvwxyz"', function(){
                expect(letarray.string).toBe('abcdefghijklmnopqrstuvwxyz');
            });
            it(' and should then split this into an array which should exist', function(){
                expect(letarray.stringsplit).toBeDefined();
            });
            it(' and have a length of 26', function(){
                letarray.findlength('abcdefghijklmnopqrstuvwxyz');
                expect(letarray.count).toBe(26);
            });
        });
    });
});
