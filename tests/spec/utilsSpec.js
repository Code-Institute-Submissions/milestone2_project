describe('Utils.js', function() {
    beforeEach(function(){
        numCheck = new checkHeights();
        letarray = new lettersplit();
    });
    it("Should exist", function(){
        expect(numCheck).toBeDefined();
        expect(letarray).toBeDefined();
    });
    describe('Should be able to check and compare heights of elements', function(){
        
        it("should return 42", function(){
            numCheck.checkHeight(42,40);
            expect(numCheck.value).toBe(42);
        });
        it("should return 28", function(){
            numCheck.checkHeight(18,28);
            expect(numCheck.value).toBe(28);
        });
        
        
    });
    
    describe('Should contain a string containing the alphabet', function(){
        it('that should contain "abcdefghijklmnopqrstuvwxyz"', function(){
            expect(letarray.string).toBe('abcdefghijklmnopqrstuvwxyz')
        });
        it(' and should then split this into an array which should exist', function(){
            expect(letarray.stringsplit).toBeDefined();
        });
        it(' and have a length of 26', function(){
            letarray.findlength('abcdefghijklmnopqrstuvwxyz');
            expect(letarray.count).toBe(26);
        })
    });

});
