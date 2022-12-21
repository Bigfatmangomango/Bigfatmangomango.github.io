let logoSpan = document.querySelectorAll('.logo');
let videoSpan = document.querySelectorAll('.video');
let debutSpan = document.querySelectorAll('.debut');


window.addEventListener('DOMContentLoaded', ()=>{

	setTimeout(()=>{

		logoSpan.forEach((span, idx)=>{
			setTimeout(()=>{
				span.classList.add('active');
			}, (idx * 1) * 400)
		});

		setTimeout(()=>{
			videoSpan.forEach((span, idx)=>{

				setTimeout(()=>{
					span.classList.add('active');
				}, (idx * 1) * 50)
			})
		},1400);

		setTimeout(()=>{
			debutSpan.forEach((span, idx)=>{

				setTimeout(()=>{
					span.classList.add('active');
				}, (idx * 1) * 100)
			})
		},1400)

	})
})