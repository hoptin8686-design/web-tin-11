import { LessonExtra } from "@/lib/types";

// Bài 9: Giao tiếp an toàn trên Internet (Đúng/Sai & Tự luận / Trả lời ngắn)
export const extra: LessonExtra = {
  "tf": [
    {
      "id": "b9-tf1",
      "context": "Bạn Hoàng nhận được một email có tiêu đề: '[Khẩn cấp] Tài khoản ngân hàng của bạn bị khóa, nhấp vào liên kết dưới đây để xác thực ngay trong 24 giờ'. Hoàng băn khoăn về tính xác thực của bức thư này:",
      "statements": [
        {
          "text": "a) Đây là một hình thức tấn công lừa đảo trực tuyến (Phishing) điển hình lợi dụng tâm lý hoang mang sợ hãi của nạn nhân.",
          "answer": true,
          "explain": "Đúng. Kẻ xấu thường tạo áp lực thời gian khẩn cấp để nạn nhân mất cảnh giác."
        },
        {
          "text": "b) Nếu Hoàng nhấp vào đường link và nhập tên đăng nhập cùng mật khẩu, thông tin đó sẽ được gửi thẳng về máy chủ của kẻ lừa đảo.",
          "answer": true,
          "explain": "Đúng. Trang web giả mạo được thiết kế nhằm thu thập tài khoản của người dùng."
        },
        {
          "text": "c) Các ngân hàng thương mại uy tín luôn yêu cầu khách hàng gửi mật khẩu và mã OTP qua email để bảo đảm an toàn.",
          "answer": false,
          "explain": "Sai. Ngân hàng KHÔNG BAO GIỜ yêu cầu khách hàng cung cấp mật khẩu hoặc mã OTP dưới bất kỳ hình thức nào."
        },
        {
          "text": "d) Hoàng nên báo cáo thư này là thư lừa đảo (Phishing/Spam) và tuyệt đối không nhấp vào bất kỳ liên kết hay tệp đính kèm nào.",
          "answer": true,
          "explain": "Đúng. Đây là cách ứng xử chuẩn mực để bảo vệ tài khoản cá nhân."
        }
      ]
    },
    {
      "id": "b9-tf2",
      "context": "Về các nguyên tắc đặt mật khẩu và bảo mật tài khoản cá nhân:",
      "statements": [
        {
          "text": "a) Mật khẩu mạnh nên có độ dài tối thiểu từ 12 ký tự, bao gồm cả chữ hoa, chữ thường, số và ký tự đặc biệt.",
          "answer": true,
          "explain": "Đúng. Độ phức tạp và độ dài giúp chống lại các cuộc tấn công vét cạn (Brute-force)."
        },
        {
          "text": "b) Để cho dễ nhớ, người dùng nên đặt một mật khẩu duy nhất giống hệt nhau cho tất cả các tài khoản mạng xã hội, email và ngân hàng.",
          "answer": false,
          "explain": "Sai. Dùng chung mật khẩu cực kỳ nguy hiểm: nếu một trang web bảo mật kém bị lộ thì tất cả tài khoản khác sẽ bị chiếm đoạt theo dây chuyền."
        },
        {
          "text": "c) Kích hoạt tính năng xác thực hai yếu tố (2FA) giúp ngăn chặn kẻ xấu đăng nhập ngay cả khi mật khẩu tài khoản bị lộ.",
          "answer": true,
          "explain": "Đúng. Lớp xác thực thứ hai tạo ra rào chắn an toàn bổ sung."
        },
        {
          "text": "d) Sử dụng ngày tháng năm sinh hoặc số điện thoại làm mật khẩu là biện pháp được các chuyên gia an ninh mạng khuyến nghị.",
          "answer": false,
          "explain": "Sai. Thông tin cá nhân công khai là những thứ đầu tiên kẻ xấu thử nghiệm khi bẻ khóa."
        }
      ]
    },
    {
      "id": "b9-tf3",
      "context": "Khi phân biệt các loại phần mềm độc hại (Malware) lây nhiễm trên hệ thống máy tính:",
      "statements": [
        {
          "text": "a) Mã độc tống tiền (Ransomware) tự động mã hóa dữ liệu người dùng và đòi trả tiền chuộc để lấy lại chìa khóa giải mã.",
          "answer": true,
          "explain": "Đúng. Ransomware là mối đe dọa an ninh mạng nguy hiểm hàng đầu hiện nay."
        },
        {
          "text": "b) Phần mềm gián điệp Keylogger ghi lại toàn bộ các thao tác gõ phím của người dùng nhằm mục đích đánh cắp mật khẩu.",
          "answer": true,
          "explain": "Đúng. Keylogger âm thầm ghi lại mọi ký tự từ bàn phím gửi cho tin tặc."
        },
        {
          "text": "c) Sâu máy tính (Worm) chỉ có thể lây lan khi người dùng tự tay sao chép tệp qua đĩa mềm.",
          "answer": false,
          "explain": "Sai. Sâu máy tính có khả năng tự động nhân bản và lây lan diện rộng qua mạng Internet mà không cần người dùng thao tác."
        },
        {
          "text": "d) Ngựa thành Troy (Trojan) thường ngụy trang dưới dạng phần mềm hữu ích hoặc trò chơi miễn phí để đánh lừa người dùng tải về.",
          "answer": true,
          "explain": "Đúng. Đây là cơ chế lừa đảo kinh điển của loại mã độc Trojan."
        }
      ]
    },
    {
      "id": "b9-tf4",
      "context": "Về an toàn khi sử dụng mạng không dây công cộng và tuân thủ Luật An ninh mạng:",
      "statements": [
        {
          "text": "a) Mạng Wi-Fi công cộng không có mật khẩu tiềm ẩn nguy cơ bị tin tặc nghe lén và bắt các gói tin dữ liệu chưa mã hóa.",
          "answer": true,
          "explain": "Đúng. Mạng công cộng thiếu lớp bảo vệ mã hóa cục bộ."
        },
        {
          "text": "b) Sử dụng mạng riêng ảo (VPN) giúp mã hóa đường truyền dữ liệu khi buộc phải kết nối với Wi-Fi công cộng.",
          "answer": true,
          "explain": "Đúng. VPN bảo vệ dữ liệu truyền tải khỏi con mắt tò mò của kẻ nghe lén."
        },
        {
          "text": "c) Theo Luật An ninh mạng Việt Nam, việc tự do bịa đặt và chia sẻ thông tin sai sự thật xúc phạm danh dự người khác lên mạng là hành vi hợp pháp.",
          "answer": false,
          "explain": "Sai. Đây là hành vi vi phạm pháp luật nghiêm trọng, có thể bị phạt hành chính hoặc truy cứu trách nhiệm hình sự."
        },
        {
          "text": "d) Thường xuyên cập nhật hệ điều hành giúp vá các lỗ hổng bảo mật và nâng cao khả năng phòng thủ của máy tính.",
          "answer": true,
          "explain": "Đúng. Các bản cập nhật vá lỗi bảo mật định kỳ là phòng tuyến cơ bản nhất."
        }
      ]
    }
  ],
  "essay": [
    {
      "id": "b9-es1",
      "q": "Tấn công giả mạo (Phishing) là gì? Nêu 3 dấu hiệu nhận biết một trang web hoặc email lừa đảo Phishing và cách phòng tránh hiệu quả.",
      "answer": "1. Khái niệm Phishing: Là hình thức tấn công phi kỹ thuật (Social Engineering), trong đó kẻ xấu giả danh các tổ chức uy tín (như ngân hàng, mạng xã hội Facebook/Google, cơ quan nhà nước) gửi thông điệp giả mạo nhằm đánh lừa người dùng cung cấp thông tin nhạy cảm (tên đăng nhập, mật khẩu, mã OTP, số thẻ ngân hàng).\n\n2. Ba dấu hiệu nhận biết:\n- Địa chỉ người gửi và tên miền bất thường: Tên miền mạo danh gần giống tên miền thật (ví dụ: vietcombank-ebank.xyz thay vì vietcombank.com.vn), địa chỉ email người gửi có đuôi kỳ lạ.\n- Nội dung mang tính đe dọa khẩn cấp hoặc hứa hẹn phần thưởng lớn: 'Tài khoản của bạn sẽ bị xóa sau 24h', 'Bạn đã trúng thưởng xe máy SH', ép buộc người dùng hành động vội vàng mà không kịp suy xét.\n- Liên kết yêu cầu nhập thông tin mật: Dẫn đến trang web không có chứng chỉ bảo mật (HTTP thay vì HTTPS, thiếu biểu tượng ổ khóa) và yêu cầu nhập mật khẩu hoặc mã OTP.\n\n3. Cách phòng tránh hiệu quả:\n- Tuyệt đối không bấm vào các đường link lạ nhận được qua tin nhắn hay email nặc danh.\n- Luôn tự gõ trực tiếp địa chỉ chính thức của ngân hàng/dịch vụ vào thanh địa chỉ của trình duyệt.\n- Kích hoạt tính năng xác thực hai yếu tố (2FA) bằng ứng dụng tạo mã chuyên dụng."
    },
    {
      "id": "b9-es2",
      "q": "Giải thích nguyên lý hoạt động của cơ chế Xác thực hai yếu tố (2FA). Vì sao 2FA an toàn hơn nhiều so với việc chỉ dùng một mật khẩu truyền thống?",
      "answer": "1. Nguyên lý hoạt động của 2FA:\n- Yếu tố 1 (Cái bạn biết): Mật khẩu tĩnh thông thường do người dùng tự đặt và ghi nhớ.\n- Yếu tố 2 (Cái bạn sở hữu): Một bằng chứng xác thực tạm thời chỉ tồn tại trong thời gian ngắn (30-60 giây), ví dụ: mã OTP gửi về số điện thoại qua tin nhắn SMS, mã sinh ra từ ứng dụng Authenticator (Google Authenticator) hoặc khóa bảo mật vật lý FIDO cắm qua cổng USB.\n- Khi đăng nhập: Hệ thống chỉ cấp quyền truy cập khi người dùng cung cấp thành công CẢ HAI yếu tố trên.\n\n2. Vì sao 2FA an toàn hơn nhiều:\n- Nếu chỉ dùng mật khẩu truyền thống: Khi mật khẩu bị lộ (do bị quay lén, bị mã độc Keylogger đánh cắp, hoặc do máy chủ trang web bị tin tặc bẻ khóa), tài khoản sẽ lập tức bị chiếm đoạt hoàn toàn.\n- Khi có 2FA: Kẻ gian dù có được mật khẩu của bạn nhưng nếu không cầm chiếc điện thoại của bạn trên tay để lấy mã OTP thứ hai thì vẫn hoàn toàn bị hệ thống chặn đứng bên ngoài."
    },
    {
      "id": "b9-es3",
      "q": "Phân biệt sự khác nhau về cơ chế lây lan và mức độ nguy hại giữa: Virus máy tính, Sâu máy tính (Worm), Ngựa thành Troy (Trojan) và Mã độc tống tiền (Ransomware).",
      "answer": "Phân biệt 4 loại mã độc phổ biến:\n1. Virus máy tính:\n- Cơ chế: Cần ký sinh bám vào một tệp chương trình hợp pháp (như tệp .exe, tài liệu Word chứa macro); chỉ lây lan và hoạt động khi người dùng nhấp đúp chuột kích hoạt tệp đó.\n- Tác hại: Phá hoại tệp tin, xóa dữ liệu, làm chậm hệ thống.\n\n2. Sâu máy tính (Worm):\n- Cơ chế: Hoạt động hoàn toàn độc lập, không cần tệp ký sinh; có khả năng tự động nhân bản và tự lan truyền qua các lỗ hổng bảo mật mạng Internet mà không cần sự can thiệp của con người.\n- Tác hại: Làm nghẽn băng thông mạng toàn cầu, làm sụp đổ các hệ thống máy chủ mạng diện rộng.\n\n3. Ngựa thành Troy (Trojan):\n- Cơ chế: Không tự nhân bản, mà ngụy trang dưới vỏ bọc một phần mềm có ích, trò chơi bẻ khóa (crack) hoặc tệp hấp dẫn để lừa người dùng tự nguyện tải về và cài đặt.\n- Tác hại: Mở 'cửa hậu' (Backdoor) cho tin tặc chiếm quyền điều khiển máy tính từ xa, biến máy thành máy ma (Zombie).\n\n4. Mã độc tống tiền (Ransomware):\n- Cơ chế: Thường xâm nhập qua tệp đính kèm email giả mạo hoặc lỗ hổng bảo mật, âm thầm quét toàn bộ ổ đĩa và mã hóa tất cả các tệp tài liệu quan trọng bằng thuật toán mã hóa khóa công khai cực mạnh.\n- Tác hại: Tước đoạt hoàn toàn quyền truy cập dữ liệu của nạn nhân, hiển thị thông báo đòi tiền chuộc lớn (thường bằng tiền ảo Bitcoin) thì mới cung cấp khóa giải mã."
    },
    {
      "id": "b9-es4",
      "q": "Nêu 4 hành vi vi phạm phổ biến trên không gian mạng mà học sinh cần tuyệt đối tránh theo quy định của Luật An ninh mạng Việt Nam.",
      "answer": "Bốn hành vi vi phạm phổ biến học sinh cần tuyệt đối tránh:\n1. Phát tán thông tin sai sự thật (Tin giả): Bịa đặt, chia sẻ hoặc tiếp tay lan truyền các thông tin sai sự thật gây hoang mang trong dư luận, làm mất trật tự an ninh xã hội hoặc ảnh hưởng đến uy tín của các cơ quan, tổ chức.\n2. Bôi nhọ, xúc phạm danh dự và nhân phẩm người khác: Đăng bài viết, hình ảnh cắt ghép, dùng ngôn từ thóa mạ, bắt nạt hoặc vu khống bạn bè, thầy cô giáo trên các trang mạng xã hội.\n3. Xâm phạm bí mật đời tư cá nhân: Tự ý thu thập, phát tán trái phép thông tin cá nhân, hình ảnh riêng tư, tài khoản ngân hàng hoặc số Căn cước công dân của người khác khi chưa được sự đồng ý của họ.\n4. Tấn công mạng và phát tán mã độc: Tham gia hoặc sử dụng các công cụ tin tặc để tấn công từ chối dịch vụ (DDoS), bẻ khóa phần mềm lậu, phát tán đường link chứa virus độc hại nhằm phá hoại hệ thống thông tin của trường học hoặc tổ chức khác."
    }
  ]
};
