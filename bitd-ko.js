Hooks.once('init', () => {

	if(typeof Babele !== 'undefined') {
		  
	  console.log("Babele loaded");
	  Babele.get().register({
		  module: 'bitd-ko',
		  lang: 'ko',
		  dir: 'compendium'
	  });
	} else {
		console.log("Babele not loaded");
	}
  });
