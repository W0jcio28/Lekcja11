$(document).ready(function () {
	//Zad1
	$('#div1').hide()
	$('#DodajP').click(function () {
		$('#div1').show()
	})
	$('#Zat').click(function () {
		let produkt = $('#inputDodaj').val()

		if (produkt !== '') {
			$('#lista').append('<li>' + produkt + '</li>')
			$('#inputDodaj').val('')
			$('#div1').hide()
		}
	})

	$('#Usun').click(function () {
		$('#lista li:last').remove()
	})

	//Zad2 i Zad4
	$('#lista').on('click', 'li', function () {
		$(this).addClass('active')
		let dane = $(this).text()
		let input = $('<input type = "text" id = "Zmiana" class="active"/>').val(dane)
		$(this).fadeOut(1000, function () {
			$(this).replaceWith(input)
			input.hide().fadeIn(1000)
		})
	})
	$('#lista').on('keydown', '#Zmiana', function (e) {
		if (e.key === 'Enter') {
			let nowy = $(this).val()
			let li = $('<li>').text(nowy)

			$(this).fadeOut(1000, function () {
				$(this).replaceWith(li)
				li.hide().fadeIn(1000)
			})
		}
	})
	//Zad3
	$('#dK').click(function () {
		let produkt = $('#inputDodaj').val()

		if (produkt !== '') {
			$('#lista').append('<li>' + produkt + '</li>')
			$('#inputDodaj').val('')
			$('#div1').hide()
		}
	})
	$('#dP').click(function () {
		let produkt = $('#inputDodaj').val()

		if (produkt !== '') {
			$('#lista').prepend('<li>' + produkt + '</li>')
			$('#inputDodaj').val('')
			$('#div1').hide()
		}
	})
	$('#cL').click(function () {
		$('#lista').empty()
	})

	$('#pL').click(function () {
		$('#lista').append('<li>Produk1</li><li>Produk2</li><li>Produk3</li>')
	})

	//Zad4
	$('#dClass').click(function () {
		let produkt = $('#inputDodaj').val()

		if (produkt !== '') {
			$('#lista').append('<li class="list-group-item">' + produkt + '</li>')
			$('#inputDodaj').val('')
			$('#div1').hide()
		}
	})
	$('#bE').click(function () {
		$('#lista li:even').css('background-color', 'red')
	})

	$('#lista').sortable()
	$('#lista').disableSelection()

	$('#sortAZ').on('click', function () {
		let items = $('#lista li').get()

		items.sort(function (a, b) {
			return $(a).text().localeCompare($(b).text(), 'pl')
		})

		$('#lista').empty().append(items)
	})

	$('#filterBtn').on('click', function () {
		let phrase = $('#jakFiltr').val().toLowerCase()

		$('#lista li').each(function () {
			let text = $(this).text().toLowerCase()
			$(this).toggle(text.includes(phrase))
		})
	})
})
