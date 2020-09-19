$(function () {
	$('[data-toggle="tooltip"]').tooltip();

	$('#reserveButton').click(function () {
		$('#reserveModal').modal('show');
	});

	$('#loginButton').click(function () {
		$('#loginModal').modal('show');
	});
});
