/**
 * @license Copyright (c) 2003-2015, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or http://ckeditor.com/license
 */

CKEDITOR.editorConfig = function (config) {
    config.enterMode = CKEDITOR.ENTER_P;
    config.shiftEnterMode = CKEDITOR.ENTER_BR;
    config.language = 'ko';
    config.width = '100%';
    config.height = 300;
    config.extraPlugins = "tableresize";
    config.filebrowserUploadUrl = '/se/ckeditor/uploadfile.do';
    config.toolbar =
        [
            //['Source','-','-','-','NewPage','Preview','-'],
            ['Bold', 'Italic', 'Underline', 'Strike', '-', 'Subscript', 'Superscript'],
            ['Cut', 'Copy', 'Paste'],
            ['Undo', 'Redo', '-', 'Find', 'Replace', '-', 'SelectAll', 'RemoveFormat'],
            ['Link', 'Unlink'],
            '/',
            ['NumberedList', 'BulletedList', '-', 'Outdent', 'Indent', 'Blockquote'],
            ['JustifyLeft', 'JustifyCenter', 'JustifyRight', 'JustifyBlock'],
            ['Image', 'Table', 'HorizontalRule'],
            ['TextColor', 'BGColor'],
            ['Maximize', 'ShowBlocks'],
            '/',
            ['Styles', 'Format', 'Font', 'FontSize']
        ];
};

CKEDITOR.on('dialogDefinition', function (ev) {
    var dialogName = ev.data.name;
    var dialog = ev.data.definition.dialog;
    var dialogDefinition = ev.data.definition;
    if (dialogName == 'image') {
        dialog.on('show', function (obj) {
            this.selectPage('Upload');
        });
        dialogDefinition.removeContents('advanced');
        dialogDefinition.removeContents('Link');
    }
});
