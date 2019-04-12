describe('Utils.js', function() {
    beforeEach(function(){
        numCheck = new checkHeights();
    });
    describe('Should be able to check and compare heights of elements', function(){
        it("Should exist", function(){
            
        });
        it("should return 42", function(){
            numCheck.checkHeight(42,40);
            expect(numCheck.value).toBe(42);
        });
        
        
    }); 
});