import { Question } from "@/lib/types";

// Bài 5: Kết nối máy tính với các thiết bị số
export const questions: Question[] = [
  {
    "id": "b5-01",
    "q": "Cổng giao tiếp USB Type-C hiện đại có ưu điểm nổi bật nào so với cổng USB Type-A truyền thống?",
    "options": [
      "Kích thước nhỏ gọn, thiết kế đối xứng cắm được cả hai chiều, hỗ trợ truyền dữ liệu tốc độ cao, cấp nguồn sạc nhanh và truyền hình ảnh",
      "Chỉ cắm được đúng một chiều duy nhất và tốc độ rất chậm",
      "Chỉ dùng riêng cho các máy tính bàn cổ điển",
      "Không bao giờ truyền được tín hiệu điện năng"
    ],
    "answer": 0,
    "explain": "USB Type-C tiện lợi nhờ đầu cắm đảo chiều đối xứng, tích hợp giao thức truyền dữ liệu siêu tốc (USB 3.2/USB4), hỗ trợ sạc công suất cao (Power Delivery) và xuất hình ảnh DisplayPort."
  },
  {
    "id": "b5-02",
    "q": "Cổng kết nối HDMI (High-Definition Multimedia Interface) trên máy tính dùng để truyền loại tín hiệu nào?",
    "options": [
      "Truyền đồng thời cả tín hiệu hình ảnh số độ nét cao và âm thanh đa kênh qua một sợi cáp duy nhất",
      "Chỉ truyền tín hiệu âm thanh đơn kênh (Mono)",
      "Chỉ truyền tín hiệu điện một chiều để thắp sáng bóng đèn",
      "Chỉ dùng để kết nối mạng Internet qua cáp quang"
    ],
    "answer": 0,
    "explain": "HDMI là chuẩn kết nối số phổ biến nhất hiện nay nối máy tính với màn hình, tivi, máy chiếu; truyền cả hình ảnh chất lượng cao và âm thanh số qua cùng một sợi cáp."
  },
  {
    "id": "b5-03",
    "q": "Cổng VGA (D-Sub 15 chân màu xanh dương) trên máy tính truyền loại tín hiệu nào?",
    "options": [
      "Tín hiệu hình ảnh dạng tương tự (Analog) và không truyền âm thanh",
      "Tín hiệu âm thanh kỹ thuật số vòm 7.1",
      "Dòng điện xoay chiều 220V",
      "Sóng vô tuyến không dây khoảng cách xa"
    ],
    "answer": 0,
    "explain": "VGA là chuẩn kết nối hình ảnh analog cổ điển, chỉ truyền tín hiệu video tương tự từ máy tính sang màn hình, không hỗ trợ truyền tín hiệu âm thanh."
  },
  {
    "id": "b5-04",
    "q": "Chuẩn kết nối không dây Bluetooth thường được sử dụng trong trường hợp nào?",
    "options": [
      "Kết nối các thiết bị ngoại vi cá nhân ở cự ly ngắn (chuột, bàn phím, tai nghe, loa không dây) với mức tiêu thụ điện thấp",
      "Kết nối hai máy tính cách nhau 500 km qua vệ tinh",
      "Thay thế hoàn toàn đường dây điện lưới quốc gia",
      "Chuyển tệp tin dung lượng 100 TB trong vòng 1 giây"
    ],
    "answer": 0,
    "explain": "Bluetooth là công nghệ vô tuyến tầm ngắn (khoảng dưới 10m), tiêu tốn rất ít năng lượng, cực kỳ phù hợp cho các thiết bị cá nhân như tai nghe, chuột, bàn phím."
  },
  {
    "id": "b5-05",
    "q": "Khi kết nối điện thoại thông minh với máy tính qua cáp USB, tùy chọn 'Truyền tệp' (File Transfer / MTP) cho phép:",
    "options": [
      "Máy tính truy cập vào bộ nhớ điện thoại để sao chép tài liệu, ảnh, video qua lại",
      "Điện thoại tự động xóa sạch toàn bộ danh bạ",
      "Máy tính chỉ đóng vai trò củ sạc pin mà không đọc được dữ liệu nào",
      "Điện thoại biến thành bàn phím gõ chữ cho máy tính"
    ],
    "answer": 0,
    "explain": "Chế độ MTP (Media Transfer Protocol) cho phép hệ điều hành máy tính đọc và ghi dữ liệu trên bộ nhớ trong và thẻ nhớ của điện thoại."
  },
  {
    "id": "b5-06",
    "q": "Tính năng 'Điểm truy cập cá nhân' (Personal Hotspot) hoặc 'Chia sẻ kết nối Internet qua USB' (USB Tethering) trên điện thoại có tác dụng gì?",
    "options": [
      "Chia sẻ kết nối mạng dữ liệu di động (4G/5G) của điện thoại cho máy tính truy cập Internet",
      "Tự động gửi ảnh cá nhân lên trang web công cộng",
      "Sạc ngược pin từ máy tính sang điện thoại với tốc độ ánh sáng",
      "Tự động tăng tốc độ xử lý của CPU máy tính"
    ],
    "answer": 0,
    "explain": "Tethering biến chiếc điện thoại thông minh thành một modem/bộ định tuyến phát sóng Internet cho máy tính sử dụng khi không có mạng dây hay Wi-Fi."
  },
  {
    "id": "b5-07",
    "q": "Công cụ Device Manager trong hệ điều hành Windows dùng để làm gì?",
    "options": [
      "Xem danh sách, kiểm tra tình trạng hoạt động và cập nhật trình điều khiển (driver) của tất cả các phần cứng kết nối với máy",
      "Quản lý tài khoản mạng xã hội của người dùng",
      "Vẽ tranh minh họa và biên tập video",
      "Tự động tắt nguồn máy tính sau 10 phút"
    ],
    "answer": 0,
    "explain": "Device Manager quản lý tập trung toàn bộ phần cứng, hiển thị cảnh báo dấu chấm than vàng nếu có thiết bị thiếu hoặc lỗi driver."
  },
  {
    "id": "b5-08",
    "q": "Khi cắm một máy in mới vào máy tính nhưng máy in không hoạt động và xuất hiện biểu tượng cảnh báo dấu chấm than vàng trong Device Manager, nguyên nhân phổ biến nhất là:",
    "options": [
      "Máy tính chưa được cài đặt trình điều khiển (Driver) phù hợp cho máy in đó",
      "Mực máy in bị đóng băng do thời tiết lạnh",
      "Bàn phím máy tính bị hỏng nút cách Space",
      "Màn hình máy tính có độ phân giải quá cao"
    ],
    "answer": 0,
    "explain": "Dấu chấm than vàng là ký hiệu của Windows báo hiệu phần cứng đã được cắm vào nhưng hệ điều hành thiếu driver để giao tiếp và điều khiển thiết bị."
  },
  {
    "id": "b5-09",
    "q": "Cổng mạng cắm cáp chuẩn RJ45 trên thùng máy tính còn được gọi là cổng gì?",
    "options": [
      "Cổng mạng LAN (Ethernet)",
      "Cổng âm thanh quang học Optical",
      "Cổng nguồn AC 220V",
      "Cổng cắm micro 3.5mm"
    ],
    "answer": 0,
    "explain": "Cổng RJ45 (Ethernet/LAN) dùng để cắm dây cáp mạng xoắn đôi nối với bộ định tuyến Router hoặc Switch, cho kết nối mạng có dây ổn định tốc độ cao."
  },
  {
    "id": "b5-10",
    "q": "Đầu cắm giắc cắm âm thanh chuẩn 3.5 mm (Audio Jack) trên máy tính xách tay hiện nay thường tích hợp chức năng gì?",
    "options": [
      "Kết hợp cả đầu ra âm thanh cho tai nghe và đầu vào cho micro (Combo Jack)",
      "Cấp nguồn điện 1000W cho máy bơm nước",
      "Xuất hình ảnh độ phân giải 8K ra máy chiếu",
      "Đọc thẻ nhớ điện thoại MicroSD"
    ],
    "answer": 0,
    "explain": "Giắc combo 3.5mm hiện đại (chuẩn TRRS) tích hợp cả tín hiệu âm thanh nổi cho tai nghe và kênh thu âm cho micro trên cùng một lỗ cắm."
  },
  {
    "id": "b5-11",
    "q": "Chuẩn kết nối DisplayPort (DP) thường xuất hiện trên các màn hình máy tính đồ họa và card màn hình rời cao cấp với ưu thế:",
    "options": [
      "Băng thông rất lớn, hỗ trợ độ phân giải siêu cao (4K, 8K) và tần số quét làm tươi màn hình (Refresh Rate) cực cao",
      "Chỉ truyền hình ảnh đen trắng",
      "Tự động in văn bản ra giấy mà không cần máy in",
      "Có kích thước to bằng nắm tay người lớn"
    ],
    "answer": 0,
    "explain": "DisplayPort là chuẩn hiển thị số cao cấp, cung cấp băng thông truyền dữ liệu đồ họa vượt trội, tối ưu cho chơi game tần số quét cao (144Hz, 240Hz) và thiết kế đồ họa chuyên nghiệp."
  },
  {
    "id": "b5-12",
    "q": "Để ghép đôi (Pairing) một tai nghe không dây Bluetooth mới với máy tính chạy Windows, người dùng cần vào đâu trong Settings?",
    "options": [
      "Bluetooth & devices -> Add device",
      "Personalization -> Background",
      "Time & language -> Date & time",
      "System -> Storage"
    ],
    "answer": 0,
    "explain": "Trong Settings của Windows, mục Bluetooth & devices cho phép bật kết nối Bluetooth, quét tìm thiết bị lân cận và thực hiện ghép đôi an toàn."
  },
  {
    "id": "b5-13",
    "q": "Khi rút một ổ đĩa USB ra khỏi máy tính, thao tác an toàn nhất mà người dùng nên thực hiện là gì?",
    "options": [
      "Nhấp chuột phải vào biểu tượng USB trên khay hệ thống và chọn 'Eject', chờ thông báo an toàn mới rút ra",
      "Rút thẳng tay thật nhanh khi đèn báo trên USB đang nhấp nháy liên tục",
      "Bấm tắt nút nguồn của máy tính rồi mới rút USB",
      "Cầm kéo cắt đứt dây cắm USB"
    ],
    "answer": 0,
    "explain": "Lệnh Eject đảm bảo hệ điều hành đã ghi xong toàn bộ dữ liệu từ bộ đệm (cache) vào chip nhớ USB, tránh nguy cơ tệp tin bị hỏng do rút đột ngột."
  },
  {
    "id": "b5-14",
    "q": "Khe cắm thẻ nhớ SD hoặc MicroSD tích hợp trên thân máy tính xách tay thường được dùng để:",
    "options": [
      "Đọc và sao chép nhanh ảnh, video từ máy ảnh kỹ thuật số hoặc thẻ nhớ điện thoại",
      "Cấp nguồn điện trực tiếp cho màn hình máy tính",
      "Thay thế cho vi xử lý CPU khi CPU bị quá nhiệt",
      "Tăng tốc độ xoay của quạt tản nhiệt"
    ],
    "answer": 0,
    "explain": "Đầu đọc thẻ SD giúp các nhiếp ảnh gia và người dùng sao chép nhanh tư liệu ảnh, phim từ máy quay, máy ảnh sang máy tính để chỉnh sửa."
  },
  {
    "id": "b5-15",
    "q": "Chuẩn USB 3.0 thường được phân biệt dễ dàng với USB 2.0 ở đặc điểm nhận dạng trực quan nào?",
    "options": [
      "Phần nhựa bên trong đầu cắm USB 3.0 thường có màu xanh dương (Blue)",
      "Đầu cắm USB 3.0 có hình tròn như đồng xu",
      "Đầu cắm USB 3.0 phát ra tiếng nhạc khi cắm vào",
      "Đầu cắm USB 3.0 luôn tỏa ra mùi hương hoa hồng"
    ],
    "answer": 0,
    "explain": "Các nhà sản xuất quy ước chân cắm nhựa màu xanh dương (hoặc ký hiệu SS - SuperSpeed) để người dùng nhận diện cổng USB 3.0 tốc độ cao (5 Gbps)."
  },
  {
    "id": "b5-16",
    "q": "Khi kết nối máy tính xách tay với máy chiếu trong phòng học, tổ hợp phím tắt nào trong Windows giúp chuyển đổi chế độ chiếu (Duplicate, Extend, Second screen only)?",
    "options": [
      "Windows + P",
      "Windows + R",
      "Windows + E",
      "Windows + D"
    ],
    "answer": 0,
    "explain": "Tổ hợp phím Windows + P mở thanh Project để chọn chế độ hiển thị: Duplicate (nhân bản màn hình), Extend (mở rộng hai màn hình độc lập) hoặc Second screen only."
  },
  {
    "id": "b5-17",
    "q": "Chế độ hiển thị 'Extend' (Mở rộng màn hình) khi kết nối máy tính với máy chiếu hoặc màn hình phụ có tác dụng gì?",
    "options": [
      "Mở rộng không gian làm việc, cho phép hiển thị hai nội dung khác nhau trên hai màn hình độc lập",
      "Thu nhỏ màn hình máy chiếu lại bằng kích thước điện thoại",
      "Hiển thị hai hình ảnh giống hệt nhau từng chi tiết",
      "Tắt hoàn toàn màn hình máy chiếu để tiết kiệm điện"
    ],
    "answer": 0,
    "explain": "Chế độ Extend giúp giáo viên có thể vừa chiếu bài giảng cho học sinh xem trên máy chiếu, vừa theo dõi giáo án riêng trên màn hình laptop của mình."
  },
  {
    "id": "b5-18",
    "q": "Thiết bị số nào sau đây được xếp vào nhóm thiết bị thu nhận dữ liệu hình ảnh vào máy tính?",
    "options": [
      "Máy quét hình (Scanner) và Webcam",
      "Máy in phun màu",
      "Loa vi tính 2.1",
      "Màn hình máy tính"
    ],
    "answer": 0,
    "explain": "Máy quét (Scanner) và Webcam chuyển đổi hình ảnh quang học từ thế giới thực thành các tệp dữ liệu số đưa vào máy tính xử lý."
  },
  {
    "id": "b5-19",
    "q": "Khi cắm tai nghe có dây vào cổng âm thanh máy tính nhưng không nghe thấy tiếng, thao tác kiểm tra cơ bản đầu tiên là:",
    "options": [
      "Kiểm tra xem âm lượng (Volume) của Windows có bị tắt tiếng (Mute) hay không và chọn đúng thiết bị phát (Output Device)",
      "Cài lại hệ điều hành Windows từ đầu",
      "Mua ngay một máy tính mới đắt tiền hơn",
      "Dùng búa đập mạnh vào thùng máy"
    ],
    "answer": 0,
    "explain": "Người dùng cần bấm vào biểu tượng loa góc phải taskbar để kiểm tra mức âm lượng và xác nhận Windows đang chọn xuất âm thanh ra đúng cổng cắm tai nghe."
  },
  {
    "id": "b5-20",
    "q": "Cáp chuyển đổi (Adapter) từ cổng USB Type-C sang HDMI có tác dụng:",
    "options": [
      "Giúp các máy tính mỏng nhẹ chỉ có cổng Type-C có thể xuất hình ảnh sang màn hình tivi hoặc máy chiếu chuẩn HDMI",
      "Biến màn hình thường thành màn hình cảm ứng đa điểm",
      "Tăng dung lượng pin của máy tính lên gấp ba lần",
      "Tự động tải các phần mềm đồ họa nặng về máy"
    ],
    "answer": 0,
    "explain": "Adapter chuyển đổi tín hiệu số từ cổng Type-C sang chuẩn HDMI giúp kết nối linh hoạt giữa các thế hệ thiết bị khác nhau."
  },
  {
    "id": "b5-21",
    "q": "Công nghệ kết nối không dây 'Wi-Fi Direct' cho phép điều gì giữa hai thiết bị số?",
    "options": [
      "Kết nối và truyền tệp tin trực tiếp với nhau với tốc độ cao mà không cần thông qua bộ phát Wi-Fi trung gian (Access Point)",
      "Kết nối trực tiếp vào mạng lưới điện quốc gia",
      "Đọc suy nghĩ của người dùng từ xa",
      "Lưu trữ dữ liệu vĩnh viễn trên mây mưa"
    ],
    "answer": 0,
    "explain": "Wi-Fi Direct cho phép hai thiết bị (ví dụ máy tính và điện thoại) tự thiết lập mạng Wi-Fi ngang hàng riêng để bắn tệp siêu tốc mà không cần Router mạng."
  },
  {
    "id": "b5-22",
    "q": "Hạn chế lớn nhất của kết nối màn hình qua cổng VGA tương tự so với cổng HDMI số hiện đại là:",
    "options": [
      "Chất lượng hình ảnh dễ bị nhiễu sóng suy giảm ở độ phân giải cao và không có khả năng truyền kèm âm thanh",
      "Cổng VGA có kích thước quá nhỏ không cắm vừa tay",
      "Cổng VGA chỉ dùng được vào ban ngày, ban đêm không hoạt động",
      "Cổng VGA bắt buộc phải mua bản quyền hàng tháng"
    ],
    "answer": 0,
    "explain": "Tín hiệu Analog của VGA dễ bị suy hao, nhòe hình trên màn hình lớn Full HD trở lên, và người dùng phải cắm thêm một sợi dây cáp âm thanh riêng biệt."
  },
  {
    "id": "b5-23",
    "q": "Tại sao người dùng nên định kỳ cập nhật trình điều khiển (Driver) card màn hình (Display Adapter)?",
    "options": [
      "Để sửa các lỗi xung đột phần mềm, nâng cao hiệu suất đồ họa và tăng độ ổn định cho các ứng dụng mới",
      "Để đổi màu vỏ ngoài của card màn hình từ đen sang trắng",
      "Để máy tính tự động phát ra mùi thơm dễ chịu",
      "Để xóa sạch toàn bộ các tệp tin trong ổ cứng"
    ],
    "answer": 0,
    "explain": "Nhà sản xuất card đồ họa (NVIDIA, AMD, Intel) thường xuyên phát hành driver mới để sửa lỗi, tối ưu thuật toán xử lý và tăng tốc độ khung hình cho phần mềm đồ họa/game."
  },
  {
    "id": "b5-24",
    "q": "Hành vi nào sau đây là KHÔNG AN TOÀN khi kết nối thiết bị USB lạ vào máy tính?",
    "options": [
      "Nhấp đúp chuột mở trực tiếp các tệp tin có đuôi .exe, .scr, .vbs lạ trong USB khi chưa quét virus",
      "Quét virus toàn bộ USB bằng phần mềm diệt virus tin cậy trước khi mở",
      "Bật chế độ hiển thị phần mở rộng tệp để kiểm tra định dạng",
      "Sao chép an toàn dữ liệu văn bản vào thư mục kiểm tra riêng biệt"
    ],
    "answer": 0,
    "explain": "Mở trực tiếp các tệp thực thi lạ trên USB là nguyên nhân hàng đầu khiến máy tính bị lây nhiễm mã độc tự động chạy (autorun malware)."
  }
];
