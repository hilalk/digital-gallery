
			$( document ).ready(function() {
				// $("body").css("background-color", "yellow");
				$('#search-icon').css('cursor','pointer');
				function ActivateHeader()
				{
					$("#header").toggleClass("header-active");	
				}

				$("#search-icon").click(function() {
						// console.log('click');
						ActivateHeader();

				});
			});