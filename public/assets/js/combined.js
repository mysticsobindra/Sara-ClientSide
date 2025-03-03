// *********************************************
// History, Terms & Condition & How to play modal display hide
// *********************************************
$('.history, .tc, .htp, .autoLot, .ticNumPad, .allticket, .referral').on('click', function() {
    var modalSelector = '.' + $(this).attr('class').split(' ')[0] + '-modal';
    $(modalSelector).show();
});

$('.custom-modal .content').on('click', function(e) {
    e.stopPropagation();
});

$('.custom-modal').on('click', function() {
    $(this).hide();
});

$('.close-modal, .custom-modal .icon-plus').on('click', function(e) {
    e.stopPropagation();
    $(this).closest('.custom-modal').hide();
    $(this).closest('.mob-modal-history').hide();
});


// Check for AudioContext support and create the audioContext
const AudioContext = window.AudioContext || window.webkitAudioContext;
let audioContext;

// Audio files URLs
const audioFiles = {
    click: 'audio/click1.wav',
    tap: 'audio/zapsplat_multimedia_button_click_007_53868.mp3',
    bgmusic: 'audio/tower-bg.mp3',
    cashout: 'audio/mixkit-fairy-arcade-sparkle-866.wav',
    deadsound: 'audio/lose.mp3',
    royalbet: 'audio/crown.wav',
    cashin: 'audio/coin-insert.mp3',
    betin: 'audio/placebet.wav',
    blast: 'audio/explosion.mp3',
    sparkle: 'audio/sparkle.mp3',
    win: 'audio/win.mp3',
    drop: 'audio/drop.wav',
    swoosh : 'audio/swoosh.mp3',
};

const audioBuffers = {};


async function loadAudioFile(fileKey) {
    if (!audioContext) {
        audioContext = new AudioContext();
    }

    if (!audioBuffers[fileKey]) {
        try {
            const response = await fetch(audioFiles[fileKey]);
            const arrayBuffer = await response.arrayBuffer();
            const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);
            audioBuffers[fileKey] = audioBuffer;
            // console.log(`Audio file ${fileKey} loaded successfully.`);
        } catch (error) {
            console.error(`Error loading audio file ${fileKey}:`, error);
        }
    }
}

async function playAudio(bufferKey, volume = 1.0, loop = false) {
    if (!audioContext) {
        audioContext = new AudioContext();
    }

    if (audioBuffers[bufferKey]) {
        try {
            const source = audioContext.createBufferSource();
            source.buffer = audioBuffers[bufferKey];

            const gainNode = audioContext.createGain();
            gainNode.gain.value = volume;

            source.connect(gainNode);
            gainNode.connect(audioContext.destination);
            source.loop = loop;
            source.start();

            return { source, gainNode };
        } catch (error) {
            console.error(`Error playing audio: ${bufferKey}`, error);
            return null;
        }
    } else {
        console.error(`Audio not loaded or invalid buffer key: ${bufferKey}`);
        return null;
    }
}
$(document).ready(function() {
// game sound load
    loadAudioFile('click');
    loadAudioFile('cashout');
    loadAudioFile('deadsound');
    loadAudioFile('cashin');
    loadAudioFile('royalbet');
    loadAudioFile('betin');
    loadAudioFile('sparkle');
    loadAudioFile('win');
    loadAudioFile('drop');
    loadAudioFile('blast');
    loadAudioFile('swoosh');


    $('.bet-amount-input').on('input', function() {
        var inputValue = parseFloat($(this).val());
         var $inputErrorMsg = $(this).parent().next('.input-error-msg');

        if (inputValue <= 0.1) {
            $(this).val(0.1);
            $inputErrorMsg.show();
        } 
        else {
            $inputErrorMsg.hide();
        }
    });
    // ******************************************************************************************
    // Auto Bet Reset or Increase by % option js enable disable feature for mine, keno & limbo  
    // ******************************************************************************************
    $('.auto-btn').on('click', function() {
        $(this).siblings('.auto-btn').removeClass('active');
        if($(this).hasClass('reset')) {
            $(this).siblings('.input-icon').find('input').val('0.00');
        }
        $(this).addClass('active');
    });

    //  ********************************************************************************
    // Divide the input amount by half  
    //  ********************************************************************************
    $('.half').on('click', function() {
        var $input = $(this).siblings('.bet-input');
        var currentValue = parseFloat($input.val());
        var newValue = currentValue / 2;
        var $inputErrorMsg = $input.parent().next('.input-error-msg');
        if (newValue < 0.1) {
            $inputErrorMsg.show();
            // $input.val(0.1);
            // $input.attr('value', 0.1);
        } else {
            // $inputErrorMsg.hide();
            $input.val(newValue.toFixed(4));
            $input.attr('value', newValue.toFixed(4));
        }
        $input.trigger('input');
    });
    //  ********************************************************************************
    // Double the input amount by 
    //  ********************************************************************************
    $('.double').on('click', function() {
        var $input = $(this).siblings('.bet-input');
        var currentValue = parseFloat($input.val());
        var newValue = currentValue * 2;
        $input.val(newValue.toFixed(4));
        $input.attr('value', newValue.toFixed(4));
        $input.trigger('input');
    });
    //  ********************************************************************************
    // Add 1 to the input amount
    //  ********************************************************************************
    $('.plus-1').on('click', function() {
        var $input = $(this).siblings('.bet-input');
        var currentValue = parseFloat($input.val());
        var newValue = currentValue + 1;
        $input.val(newValue.toFixed(4));
        $input.attr('value', newValue.toFixed(4));
        $input.trigger('input');
    });
    //  ********************************************************************************
    // Add 10 to input amount
    //  ********************************************************************************
    $('.plus-10').on('click', function() {
        var $input = $(this).siblings('.bet-input');
        var currentValue = parseFloat($input.val());
        var newValue = currentValue + 10;
        $input.val(newValue.toFixed(4));
        $input.attr('value', newValue.toFixed(4));
        $input.trigger('input');
    });
    //  ********************************************************************************
    // Add 100 to input amount
    //  ********************************************************************************
    $('.plus-100').on('click', function() {
        var $input = $(this).siblings('.bet-input');
        var currentValue = parseFloat($input.val());
        var newValue = currentValue + 100;
        $input.val(newValue.toFixed(4));
        $input.attr('value', newValue.toFixed(4));
        $input.trigger('input');
    });

    // ****************************************************
    // Tab & Pills for Keno, Mines, limbo
    // ****************************************************
    $('.tab-head .manual').on('click', function() {
        $(this).addClass('active');
        $('.tab-head .auto').removeClass('active');
        $('.auto-content').removeClass('active');
        $('.manual-content').addClass('active');
    });

    $('.tab-head .auto').on('click', function() {
        $(this).addClass('active');
        $('.tab-head .manual').removeClass('active');
        $('.manual-content').removeClass('active');
        $('.auto-content').addClass('active');
    });
    loadAudioFile('tap');
    $(".tab-head a").on('click', function() {
        playAudio('tap', 0.3);

    });

    $('.custom-select .select-input').click(function() {
        $(this).next('.select-items').toggleClass('show'); // Show/hide the dropdown
     });

     $('.select-item').click(function() {
        $(this).siblings('.select-item').removeClass('selected');
        $(this).addClass('selected');
        var value = $(this).data('value');
        $(this).parent('.items-holder').parent('.select-items').siblings('.select-input').children('.select-selected').val(value).attr('value',value); // Update the selected option value
        $('.select-items').removeClass('show'); // Show/hide the dropdown

        // trigger on change functions of this input
        $('.levelSelectiontower').trigger('change');

     });
     $('.select-items').click(function(){
        $('.select-items').removeClass('show'); // Show/hide the dropdown
     });

});

$(document).ready(function () {
    // Show the respective modal on button click
    $('.low-modal').on('click', function () {
        $('.addition-modal .low').show();
        $('.addition-modal').addClass('active');
    });

    $('.restored-modal').on('click', function () {
        $('.addition-modal .restored').show();
        $('.addition-modal').addClass('active');
    });

    $('.lost-modal').on('click', function () {
        $('.addition-modal .lost').show();
        $('.addition-modal').addClass('active');
    });

    $('.insufficient-balance-modal').on('click', function () {
        $('.addition-modal .balance').eq(0).show();
        $('.addition-modal').addClass('active');
    });

    $('.insufficient-tickets-modal').on('click', function () {
        $('.addition-modal .balance').eq(1).show();
        $('.addition-modal').addClass('active');
    });

    $('.selection-not-completed-modal').on('click', function () {
        $('.addition-modal .selection').show();
        $('.addition-modal').addClass('active');
    });

    $('.reset-modal').on('click', function () {
        $('.addition-modal .reset').show();
        $('.addition-modal').addClass('active');
    });

    // Hide the modal when clicking outside or on the close-modal button
    $(document).on('click', function (e) {
        // If clicking outside the modal
        if ($(e.target).hasClass('addition-modal') && $(e.target).hasClass('active')) {
            $('.addition-modal').removeClass('active');
            $('.connection-low > div').hide(); // Hide all modals
        }

        // If clicking the close button
        if ($(e.target).hasClass('close-modal')) {
            $('.addition-modal').removeClass('active');
            $('.connection-low > div').hide(); // Hide all modals
        }
    });

    // Prevent modal from hiding when clicking inside the modal content
    $('.connection-low > div').on('click', function (e) {
        e.stopPropagation();
    });
});
