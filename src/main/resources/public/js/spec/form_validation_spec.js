describe("validateFirstName", function() {
	var name = "Someone";
	jasmine.getFixtures().fixturesPath = '';
	
    beforeEach(function () {
    	loadFixtures('/../../templates/registration.html');
     
        setFixtures($('<input id="firstName" type="text" />').val(name));
    });

    	
	it("Validation for First Name. First name should not be empty and can contain alphabets, numbers and space", function() {
		
		expect( validateFirstName() ).toEqual(true);
	}); 
	
	
});