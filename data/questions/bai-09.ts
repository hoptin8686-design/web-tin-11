import { Question } from "@/lib/types";

// Bài 9: Giao tiếp an toàn trên Internet
export const questions: Question[] = [
  {
    "id": "b9-01",
    "q": "Thông tin nào sau đây được xếp vào nhóm 'Thông tin cá nhân nhạy cảm' tuyệt đối không nên tùy tiện công khai trên Internet?",
    "options": [
      "Số Căn cước công dân (CCCD), mật khẩu tài khoản, mã OTP và thông tin tài khoản ngân hàng",
      "Tên câu lạc bộ thể thao mà em yêu thích",
      "Tựa đề bài thơ mà em vừa đọc trong sách Ngữ văn",
      "Tên các hành tinh trong Hệ Mặt Trời"
    ],
    "answer": 0,
    "explain": "Số CCCD, mật khẩu, mã OTP và thông tin tài chính là dữ liệu định danh nhạy cảm, nếu bị lộ kẻ xấu có thể mạo danh vay tiền hoặc chiếm đoạt tài sản."
  },
  {
    "id": "b9-02",
    "q": "Mật khẩu nào sau đây được đánh giá là mật khẩu mạnh và an toàn nhất?",
    "options": [
      "TinHoc11@KNTT#2026",
      "12345678",
      "admin123",
      "nguyenvanan"
    ],
    "answer": 0,
    "explain": "Mật khẩu mạnh cần dài từ 12 ký tự trở lên, kết hợp chữ hoa, chữ thường, chữ số và ký tự đặc biệt (@, #, $), không chứa thông tin cá nhân dễ đoán."
  },
  {
    "id": "b9-03",
    "q": "Cơ chế 'Xác thực hai yếu tố' (2FA - Two-Factor Authentication) bảo vệ tài khoản bằng cách nào?",
    "options": [
      "Yêu cầu hai bằng chứng xác minh độc lập: mật khẩu tĩnh và một mã xác thực thứ hai (mã OTP qua SMS, ứng dụng Authenticator)",
      "Bắt buộc người dùng phải gõ mật khẩu hai lần liên tiếp thật nhanh",
      "Yêu cầu hai người bạn thân cùng đăng nhập vào một tài khoản",
      "Chỉ cho phép đăng nhập từ 2 giờ chiều đến 4 giờ chiều"
    ],
    "answer": 0,
    "explain": "2FA bổ sung lớp phòng thủ thứ hai: kẻ gian dù biết mật khẩu vẫn không thể đăng nhập nếu không có thiết bị giữ mã OTP thứ hai."
  },
  {
    "id": "b9-04",
    "q": "Hình thức tấn công lừa đảo 'Phishing' trên Internet thường diễn ra dưới hình thức nào?",
    "options": [
      "Giả mạo các tổ chức uy tín (ngân hàng, mạng xã hội, cơ quan nhà nước) gửi email hoặc đường link giả để lừa người dùng nhập mật khẩu",
      "Đến tận nhà người dùng để ăn trộm máy tính",
      "Cắt đứt dây cáp quang ngầm dưới đáy biển",
      "Tự động tăng giá tiền điện của gia đình"
    ],
    "answer": 0,
    "explain": "Phishing (tấn công giả mạo) dùng trang web giả mạo có giao diện giống hệt trang thật để bẫy người dùng tự tay điền thông tin đăng nhập."
  },
  {
    "id": "b9-05",
    "q": "Loại mã độc nào sau đây có khả năng mã hóa toàn bộ dữ liệu trên máy tính của nạn nhân rồi đòi tiền chuộc để giải mã?",
    "options": [
      "Mã độc tống tiền (Ransomware)",
      "Phần mềm nghe nhạc trực tuyến",
      "Trình điều khiển máy in",
      "Bộ gõ tiếng Việt Unikey"
    ],
    "answer": 0,
    "explain": "Ransomware mã hóa tệp tin bằng thuật toán mạnh và hiển thị thông báo ép buộc nạn nhân chuyển tiền mã hóa (Bitcoin) để lấy khóa giải mã."
  },
  {
    "id": "b9-06",
    "q": "Phần mềm gián điệp 'Keylogger' hoạt động nhằm mục đích gì?",
    "options": [
      "Bí mật ghi lại toàn bộ các phím bấm của người dùng trên bàn phím (bao gồm mật khẩu, số thẻ ngân hàng) rồi gửi về cho tin tặc",
      "Khóa bàn phím lại không cho người dùng gõ chữ",
      "Tăng tốc độ nảy của các phím bấm cơ",
      "Tự động sửa lỗi sai chính tả trong văn bản"
    ],
    "answer": 0,
    "explain": "Keylogger thu thập âm thầm mọi ký tự người dùng gõ từ bàn phím để đánh cắp tài khoản cá nhân."
  },
  {
    "id": "b9-07",
    "q": "Sự khác biệt cơ bản giữa Virus máy tính và Sâu máy tính (Worm) là gì?",
    "options": [
      "Virus cần ký sinh gắn vào một tệp tin khác và cần thao tác kích hoạt của người dùng; còn Sâu máy tính có thể tự nhân bản và tự lan truyền độc lập qua mạng",
      "Virus chỉ sống được trong nước, còn Sâu máy tính sống trong đất",
      "Virus làm hỏng màn hình, còn Sâu máy tính làm hỏng chuột",
      "Virus có thể chữa bằng thuốc kháng sinh y tế"
    ],
    "answer": 0,
    "explain": "Worm nguy hiểm ở khả năng tự động lây nhiễm qua lỗ hổng mạng Internet mà không cần người dùng mở tệp."
  },
  {
    "id": "b9-08",
    "q": "Mã độc 'Ngựa thành Troy' (Trojan Horse) đánh lừa người dùng bằng cách nào?",
    "options": [
      "Ngụy trang dưới vỏ bọc một phần mềm hữu ích, trò chơi hấp dẫn để người dùng tự tay tải về và cài đặt",
      "Gửi một con ngựa thật đến trước cửa nhà người dùng",
      "Tự động biến đổi màn hình máy tính thành hình ảnh con ngựa",
      "Làm đứt dây nguồn của máy tính"
    ],
    "answer": 0,
    "explain": "Giống truyền thuyết thành Troy, mã độc Trojan giả dạng phần mềm vô hại hoặc game bẻ khóa để lừa người dùng đưa vào hệ thống."
  },
  {
    "id": "b9-09",
    "q": "Khi duyệt web, giao thức bảo mật HTTPS an toàn hơn HTTP truyền thống ở điểm nào?",
    "options": [
      "Toàn bộ dữ liệu truyền giữa trình duyệt và máy chủ web được mã hóa bằng chứng chỉ SSL/TLS, chống nghe lén",
      "HTTPS cho tốc độ xem phim nhanh gấp 10 lần HTTP",
      "HTTPS miễn phí còn HTTP bắt buộc phải trả tiền",
      "HTTPS chỉ dùng cho máy tính xách tay"
    ],
    "answer": 0,
    "explain": "Chữ S trong HTTPS là Secure: dữ liệu gửi đi (mật khẩu, thẻ tín dụng) được mã hóa, kẻ đứng giữa mạng không thể đọc trộm."
  },
  {
    "id": "b9-10",
    "q": "Biểu tượng nào trên thanh địa chỉ của trình duyệt web cho biết kết nối đang được bảo mật bằng HTTPS?",
    "options": [
      "Biểu tượng ổ khóa đóng",
      "Biểu tượng dấu gạch chéo đỏ",
      "Biểu tượng chiếc kéo cắt giấy",
      "Biểu tượng chiếc quạt máy"
    ],
    "answer": 0,
    "explain": "Biểu tượng ổ khóa đóng xác nhận trang web đã được cấp chứng chỉ bảo mật và kênh truyền được mã hóa an toàn."
  },
  {
    "id": "b9-11",
    "q": "Khi sử dụng mạng Wi-Fi công cộng miễn phí (ở quán cà phê, công viên, sân bay), rủi ro lớn nhất là gì?",
    "options": [
      "Kẻ xấu cùng mạng có thể thực hiện tấn công nghe lén (Man-in-the-Middle) để đánh cắp các gói tin chưa mã hóa",
      "Máy tính sẽ tự động bị hỏng pin ngay lập tức",
      "Màn hình máy tính sẽ bị đổi sang màu trắng đen",
      "Bộ phát Wi-Fi sẽ phát ra tiếng còi báo động"
    ],
    "answer": 0,
    "explain": "Wi-Fi công cộng thường không có mật khẩu mã hóa lớp mạng, dễ bị tin tặc giăng bẫy bắt gói tin hoặc tạo mạng Wi-Fi giả mạo."
  },
  {
    "id": "b9-12",
    "q": "Để tăng cường bảo mật khi bắt buộc phải dùng Wi-Fi công cộng, người dùng nên sử dụng công cụ nào?",
    "options": [
      "Mạng riêng ảo (VPN - Virtual Private Network)",
      "Phần mềm nghe nhạc MP3",
      "Phần mềm vẽ Paint",
      "Tắt màn hình máy tính liên tục"
    ],
    "answer": 0,
    "explain": "VPN tạo một đường hầm mã hóa (encrypted tunnel) bảo vệ toàn bộ dữ liệu đi qua Wi-Fi công cộng đến máy chủ an toàn."
  },
  {
    "id": "b9-13",
    "q": "Theo Luật An ninh mạng Việt Nam năm 2018, hành vi nào sau đây là vi phạm pháp luật và bị nghiêm cấm?",
    "options": [
      "Đăng tải thông tin bịa đặt, sai sự thật gây hoang mang dư luận hoặc xúc phạm nghiêm trọng danh dự, nhân phẩm của cá nhân khác",
      "Học lập trình trực tuyến trên các trang web giáo dục",
      "Gửi bài tập cho giáo viên qua email",
      "Xem video bài giảng về lịch sử dân tộc"
    ],
    "answer": 0,
    "explain": "Điều 8 và Điều 16 Luật An ninh mạng quy định nghiêm cấm hành vi xúc phạm danh dự, vu khống, phát tán tin giả trên không gian mạng."
  },
  {
    "id": "b9-14",
    "q": "Khi nhận được cuộc gọi từ số lạ tự xưng là 'Cán bộ cơ quan Công an' yêu cầu chuyển tiền vào tài khoản để phục vụ điều tra, em nên:",
    "options": [
      "Cảnh giác nhận diện đây là hành vi lừa đảo qua mạng, tuyệt đối không chuyển tiền và báo ngay cho gia đình hoặc cơ quan công an nơi cư trú",
      "Lập tức ra ngân hàng rút toàn bộ tiền tiết kiệm chuyển theo yêu cầu",
      "Đọc mã OTP của tài khoản ngân hàng cho đối tượng nghe",
      "Mời đối tượng đến nhà ăn cơm"
    ],
    "answer": 0,
    "explain": "Cơ quan công an, viện kiểm sát không làm việc qua điện thoại và tuyệt đối không bao giờ yêu cầu người dân chuyển tiền vào tài khoản cá nhân."
  },
  {
    "id": "b9-15",
    "q": "Tường lửa (Firewall) trong hệ thống máy tính có chức năng:",
    "options": [
      "Giám sát và kiểm soát lưu lượng mạng ra vào hệ thống dựa trên các quy tắc bảo mật định trước để ngăn chặn truy cập trái phép",
      "Dập tắt đám cháy vật lý khi thùng máy bị chập điện",
      "Tăng nhiệt độ của CPU trong mùa đông",
      "Tự động nạp tiền vào tài khoản điện thoại"
    ],
    "answer": 0,
    "explain": "Firewall như một người gác cổng mạng, ngăn chặn các kết nối độc hại từ bên ngoài thâm nhập vào máy tính cá nhân."
  },
  {
    "id": "b9-16",
    "q": "Hành vi cắm một chiếc USB lạ nhặt được ở sân trường vào máy tính của phòng thực hành có nguy cơ gì?",
    "options": [
      "Có thể kích hoạt các mã độc ẩn (Trojan, Worm) được cài cắm sẵn để tự động xâm nhập và lây lan trong mạng trường học",
      "Làm tăng tốc độ máy tính lên gấp đôi",
      "Giúp máy tính tự động tải thêm nhiều tài liệu ôn thi",
      "Không có bất kỳ nguy cơ nào vì USB rất nhỏ"
    ],
    "answer": 0,
    "explain": "Kẻ xấu thường cố tình rải USB chứa mã độc (kỹ thuật USB drop attack) để lợi dụng sự tò mò của người nhặt nhằm phát tán phần mềm độc hại."
  },
  {
    "id": "b9-17",
    "q": "Biện pháp nào sau đây giúp phòng ngừa nguy cơ mất mát dữ liệu do mã độc tống tiền (Ransomware) hiệu quả nhất?",
    "options": [
      "Thực hiện quy tắc sao lưu dữ liệu dự phòng định kỳ (Backup) ra ổ cứng ngoài ngắt kết nối hoặc đám mây độc lập",
      "Cài đặt 10 phần mềm diệt virus khác nhau trên cùng một máy tính",
      "Đổi tên tất cả các tệp tin sang tiếng nước ngoài",
      "Không bao giờ bật máy tính lên sử dụng"
    ],
    "answer": 0,
    "explain": "Bản sao lưu ngoại tuyến (Offline Backup) là giải pháp phục hồi tối thượng khi toàn bộ dữ liệu trên máy bị mã hóa tống tiền."
  },
  {
    "id": "b9-18",
    "q": "Chương trình Windows Security (Microsoft Defender) tích hợp sẵn trong Windows 10/11 có vai trò gì?",
    "options": [
      "Bảo vệ máy tính theo thời gian thực chống lại các loại virus, mã độc, phần mềm gián điệp và các mối đe dọa mạng",
      "Phần mềm dùng để thiết kế thời trang",
      "Trình duyệt web xem phim tốc độ cao",
      "Trò chơi điện tử chiến thuật quân sự"
    ],
    "answer": 0,
    "explain": "Windows Security là bộ giải pháp an ninh bảo vệ toàn diện, quét virus nền và bảo vệ tường lửa chính thức của Microsoft."
  },
  {
    "id": "b9-19",
    "q": "Tại sao người dùng NÊN thường xuyên cập nhật các bản vá lỗi (Windows Update / System Update) của hệ điều hành?",
    "options": [
      "Để vá các lỗ hổng bảo mật mới phát hiện, ngăn chặn tin tặc khai thác xâm nhập vào hệ thống",
      "Để làm cho máy tính tiêu thụ nhiều điện năng hơn",
      "Để xóa sạch các bức ảnh cá nhân",
      "Để bàn phím máy tính đổi màu sắc"
    ],
    "answer": 0,
    "explain": "Tin tặc liên tục tìm kiếm các lỗ hổng phần mềm chưa vá (Zero-day exploits); cập nhật hệ thống kịp thời giúp bít kín các cửa sổ này."
  },
  {
    "id": "b9-20",
    "q": "Một dấu hiệu điển hình cho thấy máy tính có thể đã bị nhiễm mã độc là:",
    "options": [
      "Máy tính hoạt động chậm bất thường, xuất hiện nhiều cửa sổ quảng cáo lạ, tệp tin bị đổi đuôi lạ và phần mềm diệt virus bị vô hiệu hóa",
      "Máy tính khởi động trong vòng 5 giây",
      "Màn hình hiển thị hình ảnh rõ nét và màu sắc trung thực",
      "Loa máy tính phát ra âm thanh trong trẻo"
    ],
    "answer": 0,
    "explain": "Mã độc chiếm dụng CPU ngầm, hiển thị quảng cáo rác (Adware) hoặc mã hóa tệp tin làm đổi phần mở rộng của tài liệu."
  },
  {
    "id": "b9-21",
    "q": "Khi đăng xuất (Log out) khỏi tài khoản Google hoặc Facebook trên máy tính công cộng (ở quán internet, thư viện), hành động bổ sung cần thiết là gì?",
    "options": [
      "Xóa lịch sử duyệt web, cookie và không bao giờ chọn 'Ghi nhớ mật khẩu' trên trình duyệt đó",
      "Để nguyên cửa sổ trình duyệt rồi đứng dậy đi về",
      "Tắt màn hình nhưng không tắt máy tính",
      "Ghi mật khẩu vào mảnh giấy dán cạnh màn hình"
    ],
    "answer": 0,
    "explain": "Xóa cookie và lịch sử phiên làm việc đảm bảo người ngồi sau không thể tự động phục hồi phiên đăng nhập để chiếm đoạt tài khoản."
  },
  {
    "id": "b9-22",
    "q": "Tấn công 'Kỹ thuật xã hội' (Social Engineering) trong lĩnh vực an toàn thông tin là gì?",
    "options": [
      "Nghệ thuật thao túng tâm lý con người (lợi dụng sự sợ hãi, lòng tham, sự tin tưởng) để lừa nạn nhân tự nguyện giao nộp thông tin mật",
      "Dạy môn học Xã hội học trong các trường đại học",
      "Sửa chữa đường dây điện thoại ngoài đường phố",
      "Lắp ráp linh kiện máy tính trong nhà máy"
    ],
    "answer": 0,
    "explain": "Con người thường là mắt xích yếu nhất trong chuỗi bảo mật; Social Engineering tấn công vào tâm lý chứ không bẻ khóa phần cứng."
  },
  {
    "id": "b9-23",
    "q": "Đường link nào sau đây có dấu hiệu RÕ RÀNG là liên kết giả mạo (Phishing) mạo danh ngân hàng Vietcombank?",
    "options": [
      "http://vietcombank-xacthuc-taikhoan.xyz/login",
      "https://www.vietcombank.com.vn",
      "https://vcbdigibank.vietcombank.com.vn",
      "https://vietcombank.com.vn/personal"
    ],
    "answer": 0,
    "explain": "Đường link dùng giao thức http không an toàn và tên miền lạ đuôi .xyz với tiền tố gây nhầm lẫn là chiêu thức mạo danh điển hình."
  },
  {
    "id": "b9-24",
    "q": "Học sinh có trách nhiệm gì trong việc xây dựng không gian mạng an toàn và lành mạnh?",
    "options": [
      "Tự giác nâng cao hiểu biết về an ninh mạng, bảo vệ thông tin cá nhân, ứng xử văn minh và tuân thủ các quy định của pháp luật",
      "Tham gia các nhóm tin tặc để học cách phá hoại trang web của trường",
      "Tải và phát tán các công cụ bẻ khóa phần mềm lậu",
      "Chia sẻ các đường link lừa đảo trúng thưởng cho người thân"
    ],
    "answer": 0,
    "explain": "Mỗi học sinh là một công dân số; việc có ý thức tự bảo vệ và tuân thủ pháp luật góp phần tạo dựng môi trường mạng an toàn cho toàn xã hội."
  }
];
