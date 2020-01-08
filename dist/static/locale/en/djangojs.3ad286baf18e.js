

(function(globals) {

  var django = globals.django || (globals.django = {});

  
  django.pluralidx = function(n) {
    var v=(n != 1);
    if (typeof(v) == 'boolean') {
      return v ? 1 : 0;
    } else {
      return v;
    }
  };
  

  /* gettext library */

  django.catalog = django.catalog || {};
  
  var newcatalog = {
    "active": "Active",
    "add_wallet": "Add wallet",
    "add_wallet_field_placeholder": "Waves or Ethereum wallet address",
    "agree_with_terms_checkbox_error_tooltip_text": "Please tick this box if you want to proceed",
    "all_transactions": "All transactions",
    "already_booked": "Already booked",
    "already_booked_these_days_hotdesk": "You already have a hot desk booking for these dates",
    "already_booked_these_days_office": "You already have an office booking for these dates. You can book again on the last day of your booking",
    "already_earned": "Already earned",
    "amount_to_withdraw": "Amount to withdraw",
    "approx_price": "\u2248{price}",
    "available_for_leasing": "Available for MSP",
    "back": "Back",
    "booking": "Booking",
    "booking_canceled": "Your booking was cancelled successfully",
    "booking_cancellation_header": "Cancel booking",
    "booking_cancellation_text": "Are you sure you want to cancel this booking?",
    "booking_cancellation_text_coins": "Please be aware. If you have begun the transfer process and are awaiting confirmation, we cannot refund your payment.",
    "booking_cancellation_text_confirmed_coins": "Please be aware that confirmed bookings cannot be refunded. Your payment has already been sent to other members who leased out their PBT. We cannot undo that transaction.",
    "booking_confirmation_error": "Booking confirmation failed",
    "booking_confirmed": "Booking confirmed",
    "booking_error_booking_limits_desk": [
      "Sorry, you can\u2019t book more than {days} consecutive day.",
      "Sorry, you can\u2019t book more than {days} consecutive days."
    ],
    "booking_error_date_in_past": "Oops, it looks like you\u2019re trying to book in the past.",
    "booking_error_no_space_left": "Sorry, there are no more desks available on some (or all) of the selected dates. Please select new dates or try again later.",
    "booking_error_no_timeslots": "Sorry, some of those dates are not available.",
    "booking_error_not_enough_orders": "Sorry, we couldn\u2019t find Primalbase tokens for some (or all) of the selected dates. Please select new dates or try again later.",
    "booking_error_not_enough_tokens_for_days_heading": "Not enough tokens",
    "booking_error_not_enough_tokens_for_days_text": "Unfortunately, you don\u2019t have enough PBT to book the following days: {days}",
    "booking_error_not_enough_tokens_heading": "Link a wallet",
    "booking_error_not_enough_tokens_text": "In order to book using PBT, you need to confirm your Primalbase membership. Please link and confirm a Waves or Ethereum wallet with at least 1 PBT before proceeding.",
    "booking_error_reservation_limits_desk_body": [
      "Uh oh, it looks like you\u2019re trying to book too many desks at once. You can\u2019t book more than {max} desk at a time.",
      "Uh oh, it looks like you\u2019re trying to book too many desks at once. You can\u2019t book more than {max} desks at a time."
    ],
    "booking_error_reservation_limits_desk_heading": "Desk limit",
    "booking_error_reservation_limits_office_body": [
      "It looks like you\u2019re trying to book more than one office. Unfortunately, you can only book {max} office at a time.",
      "It looks like you\u2019re trying to book more than one office. Unfortunately, you can only book {max} offices at a time."
    ],
    "booking_error_reservation_limits_office_heading": "Office limit",
    "booking_error_reservation_rate_limits_heading": "Reservation limit",
    "booking_error_reservation_rate_limits_text": [
      "Sorry, you can\u2019t make more than {num} reservation in a 24 hour period.",
      "Sorry, you can\u2019t make more than {num} reservations in a 24 hour period."
    ],
    "booking_error_too_late": "Sorry, we don't accept same-day books that late.",
    "booking_error_too_late_with_time": "Sorry, we only accept same-day books by {time} local time.",
    "booking_error_total_booking_limits_desk": [
      "Sorry, the maximum number of active bookings for desks is {days} day total.",
      "Sorry, the maximum number of active bookings for desks is {days} days total."
    ],
    "booking_error_total_booking_limits_office": [
      "Sorry, the maximum number of active bookings for offices is {days} day total.",
      "Sorry, the maximum number of active bookings for offices is {days} days total."
    ],
    "booking_form_how_to_pay_tooltip_text": "Find out more about how to pay",
    "booking_not_canceled": "Booking cancellation failed",
    "booking_not_payed": "Your booking payment was unsuccessful. It was canceled.",
    "booking_payed": "Your booking payment was successful",
    "booking_payment_error_cancelled": "You cancelled the booking",
    "booking_payment_error_partial": "Booking cancelled: Insufficient funds. The transferred funds will be returned to your wallet.",
    "booking_payment_error_pending": "Booking cancelled: Your payment was not made in time to get enough payment confirmations.",
    "booking_payment_error_timeout": "Booking cancelled: Funds were not transferred on time",
    "booking_payment_status_partial": "Awaiting payment",
    "booking_payment_status_pending": "Payment registered <br/> Awaiting confirmations",
    "booking_status_active": "Active",
    "booking_status_awaiting_confirmations": "Awaiting confirmations",
    "booking_status_awaiting_payment": "Awaiting payment",
    "booking_status_canceled": "Cancelled",
    "booking_status_failed": "Failed",
    "booking_status_requested": "Requested",
    "booking_status_reserved": "Reserved",
    "booking_window": "Booking window",
    "booking_window_title": "Number of days in advance your order can be booked",
    "booking_window_tooltip_text": "Number of days in advance your order can be booked. This isn\u2019t an expiration period. It\u2019s a sliding window which moves your order on the market forward if there aren\u2019t any bookings yet. Booking window gives you the flexibility to control your token availability on the market. Take into account that the max. booking period for a desk is 90 \u0441alendar days and for the office is 14 calendar days (a calculation of booking final price is based only on business days when Primalbase operates).",
    "browser": "Browser",
    "calendar_dates_range_end": "End",
    "calendar_dates_range_end_date": "End date",
    "calendar_dates_range_start": "Start",
    "calendar_dates_range_start_date": "Start date",
    "cancel": "Cancel",
    "cancel_booked_order_text": "The order cannot be cancelled while it has bookings pending. If you continue, we will automatically cancel the order on the final day of booking: {important_start}{date} (UTC){important_end}. <br/><br/> Please be aware that your order will still be available for booking until the above cancellation date.",
    "cancel_booked_order_text_booked_days_in_past": "The order cannot be cancelled while it has bookings pending. <br/><br/> Please be aware that your order will still be available for booking until the above cancellation date.",
    "cancel_booking": "Cancel booking",
    "cancel_order": "Cancel order",
    "cancel_order_snackbar_success": "Order is successfully canceled",
    "cancel_order_text": "If you cancel this order, you will no longer receive revenue from MSP. Do you still want to continue?",
    "canceled": "Cancelled",
    "changes_saved": "Changes saved",
    "changing_earning_address": "Changing earning address",
    "changing_earning_address_text": "If you change your wallet for one order, it will change for all orders. Are you sure you want to apply changes?",
    "close_own_session_text": "You are about to close the session through which you are now logged in. Unlike other active sessions in the list, if you close this one, you will immediately get logged out of your account. Are you sure you want to do this?",
    "close_own_session_title": "Close your own session?",
    "confirm": "Confirm",
    "confirmation_data_copied": "Confirmation data copied",
    "confirmed_wallets_balance": "Wallet balance confirmed",
    "confirmed_wallets_total_leasing_balance": "Total MSP balance",
    "copy_address": "Copy address",
    "copy_confirmation_data": "Copy confirmation data",
    "create_order": "Create order",
    "create_order_success": "Order successfully created",
    "create_order_text": "After creating the order, you\u2019ll be able to change your wallet address, asking price and booking window. However, if a renter books a workspace with your tokens, you will be unable to change the price and booking window for the booked days.",
    "creation_date": "Creation date (UTC)",
    "cryptomoney": "{value} {currency}",
    "currency": "Currency",
    "current_session": "Current session",
    "date": "Date",
    "date_range": "{start_date} \u2014 {end_date}",
    "datepicker_day_event": "{name} at {start}",
    "datepicker_day_events_delimiter": ", ",
    "days": [
      "{n} day",
      "{n} days"
    ],
    "deposit_pbt": "Deposit PBT",
    "deposit_pbt_text": "{important_start}Send at least 1 PBT{important_end} to one of the addresses below, depending on the blockchain on which you keep your tokens. After 20 confirmations, the funds will be deposited to your account. This normally takes no longer than 15-30 min and depends on the blockchain load.",
    "deposit_tokens": "Deposit tokens",
    "deposited_and_withdrew": "Deposited & Withdrawn",
    "deposited_pbt_to": "Deposited PBT to {blockchain}",
    "dismiss": "Dismiss",
    "done": "Done",
    "earned": "Earned",
    "earned_asset": "Earned {asset}",
    "earning_address": "Earning address",
    "earning_address_save_snackbar_success": "Earning address was changed",
    "earning_address_text": "All payments for MSP orders will be sent to this wallet. <br/> Please do not provide smart-contract addresses as they may have special requirements which mean we cannot send earnings.",
    "edit_booked_order_text": "Prices cannot be changed for days that have already been booked.",
    "edit_order": "Edit order",
    "edit_order_last_day_checkout": "Token(s) booked until: {important_start}{date} (UTC){important_end}",
    "edit_order_success": "Order successfully edited",
    "enable_2fa_body": "Before you deposit tokens, we strongly recommend enabling 2-factor authentication to keep your PBT safe.",
    "enable_2fa_body_cancel_button": "Cancel",
    "enable_2fa_body_submit_button": "Enable",
    "enable_2fa_header": "Protect your account",
    "estimated_price_per_day": "Estimated price per day",
    "estimated_price_per_day_hint": "Our prices update regularly. When you book, you\u2019re MSP somebody\u2019s Primalbase token (PBT) at the lowest price available. Bookings are paid in Ethereum (ETH). For convenience, we show the approximate price in {currency}. Our final price does not include any transaction fees charged by third parties (e.g. Ethereum network).",
    "estimated_price_per_day_short": "Est. price per day",
    "estimated_total_price": "Estimated total price",
    "estimated_total_price_short": "Est. total price",
    "eth_code": "ETH",
    "ethereum": "Ethereum",
    "ethereum_wallet": "Ethereum wallet",
    "ethereum_wallet_confirmation_address": "To this Ethereum wallet",
    "ethereum_wallet_confirmation_contract_data_title": "Using this contract data",
    "euro_code": "EUR",
    "fair_price_tooltip_text": "Estimated price per shared desk per month based on 30 business days estimation. Our prices update regularly. When you book, you\u2019re leasing somebody\u2019s Primalbase token (PBT). Members set their own lease price, but we promise you\u2019ll pay the lowest one available. For convenience, we display the approximate price in Euros, but bookings are paid in Ethereum (ETH). Please note: our final price does not include any transaction fees charged by third parties (e.g. Ethereum network).",
    "free": "Free",
    "from": "From:",
    "get_in_touch_sent_error": "Get in touch request failed",
    "get_in_touch_sent_success": "Thank you for your request! We appreciate your interest in our residency program. We\u2019ll be in touch soon if we feel that your company would be a great fit.",
    "got_it": "Got it",
    "how_it_works_pbt_estimated_price": "Estimated token price",
    "in_leasing_now": "Currently in MSP",
    "insufficient_funds": "Insufficient funds",
    "insufficient_funds_text": "To create an order, you need at least 1 PBT.",
    "invalid_current_password": "Incorrect password",
    "ip_address": "IP address",
    "leasing_all_orders": "All orders",
    "leasing_my_archive_orders": "Order history",
    "leasing_my_order": "Your order",
    "leasing_my_orders": "My active orders",
    "leasing_page_mobile_text": "Primalbase token holders can submit their tokens into the Membership Substitution Program out tokens and earn money. You can deposit or withdraw your tokens in our secure wallet and create an order {important_start}on our desktop website{important_end}.<br/>Please note that, when a renter books a workspace, the system automatically selects the lowest available price. Keep in mind that setting the lowest price for your order doesn\u2019t usually provide you the highest earnings",
    "leasing_page_text": "Primalbase token holders can submit their tokens into the Membership Substitution Program and earn money. Simply deposit your tokens in our secure wallet and create an order.<br />Please note that, when a temporary member books a workspace the system automatically selects the lowest available price. Keep in mind that setting the lowest price for your order doesn\u2019t usually provide you the highest earnings, so feel free to use the table below to decide on an optimal order price that suits you best.",
    "link_wallet": "Link wallet",
    "log_out": "Log out",
    "logout": "Logout",
    "my_bookings_payment_checking_error": "Booking payment check failed",
    "my_wallets_added_snackbar_success": "Wallet address linked. Follow the confirmation procedure.",
    "my_wallets_mobile_text": "Primalbase Tokens (PBT) allow you to book a desk (1 PBT) or a four-seat office (4 PBT) at any location for free. In order to book, you\u2019ll need to link and confirm a wallet with the appropriate number of tokens. You can do this {important_start}on our desktop website{important_end}.",
    "my_wallets_text": "Primalbase Tokens (PBT) allow you to book a desk (1&nbsp;PBT) or a four-seat office (4&nbsp;PBT) at any location for free. In order to book, you\u2019ll need to link and confirm a wallet with the appropriate number of tokens. Confirmation process can take up to 10 minutes. Alternatively, you can book by borrowing another member\u2019s token, using Ethereum (ETH).",
    "my_wallets_unlink_snackbar_success": "Wallet address unlinked",
    "my_wallets_unlink_wallet_confirm_dialog_heading": "Unlink this wallet",
    "my_wallets_unlink_wallet_confirm_dialog_text": "Please be careful when unlinking your wallet. If your account runs low on tokens, current bookings may be cancelled.",
    "my_wallets_wallet_amount_placeholder": "0.0000 PBT",
    "newsletter_and_terms_snackbar_success": "Thank you for subscribing!",
    "newsletter_snackbar_success": "Thank you for subscribing! Follow link in email to confirm",
    "next": "Next",
    "next_location_twitter_text": "I just nominated my choice for the next #Primalbase #coworking office location. What\u2019s yours? Let\u2019s get a Primalbase in {city} {link}",
    "no_earnings": "Your token has not been leased yet. Don\u2019t worry, you will be notified when it happens. Make sure your price is in line with others in our marketplace to ensure it is at the front of the queue",
    "no_transactions": "There aren\u2019t any transactions yet. Start earning now by putting your token up on our Lease Market. It\u2019s easy and let\u2019s everyone benefit from our workspaces.",
    "no_transactions_button": "Return to MSP",
    "order_dialog_amount_format_error": "Please enter a valid value. The price must be higher than {price}",
    "order_dialog_price_approx_input_helper_text": "Minimum price is {min_price_alt}. <br/> This price is approximate.",
    "order_dialog_price_approx_input_placeholder": "Estimated price (per day)",
    "order_dialog_wallet_field_helper_text": "All payments for MSP orders will be sent to this wallet. <br/> Please do not provide smart-contract addresses.",
    "order_table_title": "30-day MSP overview",
    "order_with_id": "Order #{id}",
    "orders_archived_table_empty_text": "There aren\u2019t any finished or canceled orders yet.",
    "orders_header_mobile_already_booked": "Already</br> booked",
    "orders_header_mobile_creation_date": "Creation <br/> date (UTC)",
    "orders_header_mobile_pbt_price_per_day": "PBT price (per day)",
    "orders_header_mobile_tokens_for_lease": "Tokens <br/> in MSP",
    "orders_table_average_usage_in_percent": "{percent}%",
    "orders_table_empty_text": "You don't have any active orders yet. <br/> Create one to start earning money.",
    "orders_table_heading_already_booked": "Days</br> booked",
    "orders_table_heading_average_profit": "Average earnings <br/> per order",
    "orders_table_heading_average_usage": "Percent of<br/> rented days",
    "orders_table_heading_booking_window": "Booking </br> window",
    "orders_table_heading_cancelation_date": "Cancelation </br> date",
    "orders_table_heading_dates": "Creation </br> date",
    "orders_table_heading_pbt_price_per_day": "PBT price </br> per day",
    "orders_table_heading_ranges": "PBT price in orders <br/> per\u00a0day (ETH)",
    "orders_table_heading_tokens_amount": "Tokens </br> in MSP",
    "orders_table_heading_total_booked": "Days</br> booked",
    "os": "OS",
    "password": "Password",
    "password_is_empty_error": "Password cannot be empty",
    "password_reset_success_message": "Your password has been changed successfully. You can now login using your new password.",
    "pbt_price_per_day": "PBT price (per day)",
    "permanent_membership": "Permanent membership",
    "price_copied": "Price copied",
    "qr_code_dialog_heading": "Wallet QR-code",
    "qr_code_dialog_text": "Scan this code using a mobile device from which wallet you are going to make a transfer",
    "request": "Request",
    "request_tour_message_error": "Request failed",
    "request_tour_message_success": "Let\u2019s keep the conversation going. We\u2019ll be in touch soon.",
    "review_booking_details_price_changed_text": "It looks like someone booked ahead of you or some unforeseen circumstance has caused the suggested price of {old_price} to change. You can continue booking with a revised price of {new_price}, which will be locked at the next step. Or you can go back and change your booking dates.",
    "sample_plural_tag": [
      "{n} workspace",
      "{n} workspaces"
    ],
    "sample_singular_tag": "Hello, {username}!",
    "save_changes": "Save changes",
    "scan_qr_code": "Scan QR Code",
    "session_destroy_success": "Session has been closed",
    "sessions_footnote": "If you see something unfamiliar, {change_pass_start}change your password{change_pass_end}.",
    "settings_2fa_disabled_successfully": "Two-factor authentication successfully disabled",
    "settings_2fa_enable_password_submit_error": "Something went wrong. Please double check if your password is correct.",
    "settings_2fa_enable_recovery_codes_copied": "Copied",
    "settings_2fa_enable_recovery_codes_save_confirm_error": "Please confirm you have saved your recovery codes",
    "settings_2fa_enable_recovery_codes_save_use_once": "Each code can only be used once",
    "settings_2fa_enable_recovery_codes_used_at": "This code was previously used on {date}",
    "settings_2fa_wrong_token": "Wrong code",
    "settings_request_correction_message_error": "Correction request failed",
    "settings_request_data_message_error": "Data request failed",
    "settings_request_deletion_message_error": "Data deletion failed",
    "settings_request_export_message_error": "Data export failed",
    "settings_restriction_processing_message_error": "Processing restriction request failed",
    "sign_in_error": "Email and password do not match. Please try again or choose another login option.",
    "sign_up_verify_email_success_message": "Your email is verified. You can now sign in",
    "signed_in": "Signed in",
    "snackbar_booking_confirmation_price_error": "New price applied",
    "snackbar_generic_error": "Something went wrong. Please try again later",
    "snackbar_generic_success": "Congratulations! Your request was accepted",
    "status": "Status",
    "status_confirmed": "Confirmed",
    "status_error": "Error",
    "status_in_progress": "In progress",
    "status_pending": "Pending",
    "ten_percent_comission": "Minimum price is {min_price_eth} ETH. <br/> We charge 10% service fee per booking.",
    "to": "To:",
    "to_blockchain_wallet": "To {blockchain} wallet",
    "tokens_for_lease": "Tokens in MSP",
    "tokens_for_lease_helper_text": "The order must be placed with whole tokens",
    "total_price": "Total price",
    "transactions_history": "Transaction history",
    "two_f_a_code": "{length}-digit authentication code",
    "two_f_a_wrong_code": "Incorrect code. Please try again.",
    "unlink_wallet": "Unlink wallet",
    "until_date": "Active until {tag_start}{date} (UTC){tag_end}",
    "user_order_edit_button": "Edit",
    "view_transactions": "View transactions",
    "wallet_address_copied": "Wallet address copied",
    "wallet_address_copy": "Copy address",
    "wallet_confirmation_address_copied": "Wallet address copied",
    "wallet_confirmation_amount": "Send to confirm wallet",
    "wallet_confirmation_contract_data_info": "Some wallets call it \"Contract\" or \"Transaction\" data",
    "wallet_confirmation_gas_limit_title": "With the following gas limit",
    "wallet_to_withdraw": "{blockchain} wallet to withdraw",
    "wallets": "Wallets",
    "waves": "Waves",
    "waves_wallet": "Waves wallet",
    "waves_wallet_confirmation_address": "To this Waves wallet",
    "waves_wallet_confirmation_contract_data_title": "Using this description",
    "withdraw": "Withdraw",
    "withdraw_auth_level_cancel_button": "Cancel",
    "withdraw_auth_level_heading": "Withdraw confirmation",
    "withdraw_auth_level_submit_button": "Submit",
    "withdraw_auth_level_text": "We have to be sure that it\u2019s you. Please enter the two-factor authentication code generated by your authenticator app and your password",
    "withdraw_pbt": "Withdraw PBT",
    "withdraw_pbt_form_balance_text": "The current maximum withdrawal to {blockchain} is {max_amount}.",
    "withdraw_pbt_form_twofa_text": "Please enter the two-factor authentication code generated by your authenticator app",
    "withdraw_pbt_form_warning_text": "Please be careful to {important_start}enter the correct wallet address{important_end}. If you enter the wrong wallet address, your PBT will be lost. We cannot recover lost tokens.",
    "withdraw_pbt_form_warning_text_time_note": "Withdrawal process normally takes no longer than 15-30 min and depends on the blockchain load.",
    "withdraw_pbt_text": "Select the blockchain from which you want to withdraw your tokens.",
    "withdraw_pbt_text_no_tokens": "Unfortunately, you don\u2019t have any PBT to withdraw.",
    "withdraw_pbt_text_tokens_in_leasing": [
      "Please note that {amount_in_leasing} is currently being leased. To withdraw tokens which are being leased you {important_start}have to cancel your orders with these tokens{important_end} and wait until all bookings are complete.",
      "Please note that {amount_in_leasing} are currently being leased. To withdraw tokens which are being leased you {important_start}have to cancel your orders with these tokens{important_end} and wait until all bookings are complete."
    ],
    "withdraw_pbt_to": "Withdraw PBT to {blockchain}",
    "withdraw_success_title": "\u2212 {amount} to {blockchain}",
    "withdraw_tokens": "Withdraw tokens",
    "withdrew_pbt_from": "Withdrew PBT from {blockchain}",
    "workplace_office": "Four-seat office",
    "workplace_shared_desk": "Hot desk",
    "workspace_address_copied": "Workspace address copied"
  };
  for (var key in newcatalog) {
    django.catalog[key] = newcatalog[key];
  }
  

  if (!django.jsi18n_initialized) {
    django.gettext = function(msgid) {
      var value = django.catalog[msgid];
      if (typeof(value) == 'undefined') {
        return msgid;
      } else {
        return (typeof(value) == 'string') ? value : value[0];
      }
    };

    django.ngettext = function(singular, plural, count) {
      var value = django.catalog[singular];
      if (typeof(value) == 'undefined') {
        return (count == 1) ? singular : plural;
      } else {
        return value[django.pluralidx(count)];
      }
    };

    django.gettext_noop = function(msgid) { return msgid; };

    django.pgettext = function(context, msgid) {
      var value = django.gettext(context + '\x04' + msgid);
      if (value.indexOf('\x04') != -1) {
        value = msgid;
      }
      return value;
    };

    django.npgettext = function(context, singular, plural, count) {
      var value = django.ngettext(context + '\x04' + singular, context + '\x04' + plural, count);
      if (value.indexOf('\x04') != -1) {
        value = django.ngettext(singular, plural, count);
      }
      return value;
    };

    django.interpolate = function(fmt, obj, named) {
      if (named) {
        return fmt.replace(/%\(\w+\)s/g, function(match){return String(obj[match.slice(2,-2)])});
      } else {
        return fmt.replace(/%s/g, function(match){return String(obj.shift())});
      }
    };


    /* formatting library */

    django.formats = {
    "DATETIME_FORMAT": "d.m.Y, H:i:s",
    "DATETIME_INPUT_FORMATS": [
      "%Y-%m-%d %H:%M:%S",
      "%Y-%m-%d %H:%M:%S.%f",
      "%Y-%m-%d %H:%M",
      "%Y-%m-%d",
      "%m/%d/%Y %H:%M:%S",
      "%m/%d/%Y %H:%M:%S.%f",
      "%m/%d/%Y %H:%M",
      "%m/%d/%Y",
      "%m/%d/%y %H:%M:%S",
      "%m/%d/%y %H:%M:%S.%f",
      "%m/%d/%y %H:%M",
      "%m/%d/%y"
    ],
    "DATE_FORMAT": "d.m.Y",
    "DATE_INPUT_FORMATS": [
      "%Y-%m-%d",
      "%m/%d/%Y",
      "%m/%d/%y",
      "%b %d %Y",
      "%b %d, %Y",
      "%d %b %Y",
      "%d %b, %Y",
      "%B %d %Y",
      "%B %d, %Y",
      "%d %B %Y",
      "%d %B, %Y"
    ],
    "DECIMAL_SEPARATOR": ".",
    "FIRST_DAY_OF_WEEK": 0,
    "MONTH_DAY_FORMAT": "F j",
    "NUMBER_GROUPING": 0,
    "SHORT_DATETIME_FORMAT": "d.m.Y, H:i",
    "SHORT_DATE_FORMAT": "d.m.Y",
    "THOUSAND_SEPARATOR": ",",
    "TIME_FORMAT": "H:i:s",
    "TIME_INPUT_FORMATS": [
      "%H:%M:%S",
      "%H:%M:%S.%f",
      "%H:%M"
    ],
    "YEAR_MONTH_FORMAT": "F Y"
  };

    django.get_format = function(format_type) {
      var value = django.formats[format_type];
      if (typeof(value) == 'undefined') {
        return format_type;
      } else {
        return value;
      }
    };

    /* add to global namespace */
    globals.pluralidx = django.pluralidx;
    globals.gettext = django.gettext;
    globals.ngettext = django.ngettext;
    globals.gettext_noop = django.gettext_noop;
    globals.pgettext = django.pgettext;
    globals.npgettext = django.npgettext;
    globals.interpolate = django.interpolate;
    globals.get_format = django.get_format;

    django.jsi18n_initialized = true;
  }

}(this));

