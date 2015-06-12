(function () {
    'use strict';

    $(document).ready(function () {
        // capture the modal open event and fill in the data for the
        // project that clicked the modal.
        $('#projectModal').on('show.bs.modal', function (event) {
            var modal = $(this);
            var button = $(event.relatedTarget);
            var projectTitle = button.data('project-title');
            var projectDescription = button.data('project-description');
            var projectImage = button.data('project-image');

            modal.find('.modal-title').text(projectTitle);
            modal.find('.project-description').text(projectDescription);
            modal.find('.project-image').attr('src', projectImage);
            modal.find('.project-image').attr('alt', projectTitle + ' image');
        });
    });
}());
