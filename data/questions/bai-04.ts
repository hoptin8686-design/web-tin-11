import { Question } from "@/lib/types";

// Bài 4: Bên trong máy tính
export const questions: Question[] = [
  {
    "id": "b4-01",
    "q": "Theo kiến trúc máy tính Von Neumann, các thành phần cơ bản gồm:",
    "options": [
      "Bộ xử lý trung tâm (CPU), Bộ nhớ (Memory) và Thiết bị vào/ra (Input/Output)",
      "Màn hình, Chuột, Bàn phím và Thùng máy",
      "Phần mềm văn phòng, Trình duyệt web và Hệ điều hành",
      "Cáp mạng Internet, Bộ phát Wi-Fi và Vệ tinh"
    ],
    "answer": 0,
    "explain": "Kiến trúc Von Neumann gồm 3 khối cốt lõi: CPU (xử lý dữ liệu), Bộ nhớ (lưu trữ lệnh và dữ liệu) và Hệ thống vào/ra (giao tiếp với bên ngoài)."
  },
  {
    "id": "b4-02",
    "q": "Bộ xử lý trung tâm (CPU) bao gồm những khối chức năng chính nào sau đây?",
    "options": [
      "Khối số học và logic (ALU), Khối điều khiển (CU) và Các thanh ghi (Registers)",
      "Thanh RAM, Ổ cứng SSD và Nguồn điện",
      "Quạt tản nhiệt, Keo tản nhiệt và Ống đồng",
      "Card âm thanh, Card màn hình và Card mạng"
    ],
    "answer": 0,
    "explain": "Ba thành phần cốt lõi của CPU là: ALU (thực hiện phép tính), CU (điều khiển nhịp thực thi lệnh) và Registers (lưu dữ liệu tạm siêu tốc trong CPU)."
  },
  {
    "id": "b4-03",
    "q": "Khối số học và logic (ALU - Arithmetic Logic Unit) trong CPU có nhiệm vụ:",
    "options": [
      "Thực hiện các phép tính số học (+, -, *, /) và các phép so sánh logic (AND, OR, NOT, so sánh > < =)",
      "Lưu trữ vĩnh viễn hệ điều hành khi tắt máy tính",
      "Chuyển đổi tín hiệu điện xoay chiều 220V thành dòng điện một chiều",
      "Hiển thị hình ảnh màu sắc lên màn hình máy tính"
    ],
    "answer": 0,
    "explain": "ALU là 'bộ não tính toán' thực sự của CPU, chuyên trách các phép tính số học và các phép toán logic trên các bit nhị phân."
  },
  {
    "id": "b4-04",
    "q": "Khối điều khiển (CU - Control Unit) trong CPU đảm nhận vai trò gì?",
    "options": [
      "Giải mã lệnh, tạo các tín hiệu điều khiển để phối hợp nhịp nhàng hoạt động của toàn bộ hệ thống",
      "Đo nhiệt độ của thùng máy và kích hoạt quạt làm mát",
      "Gõ lại các đoạn văn bản do người dùng nhập từ bàn phím",
      "Lưu trữ các tệp video ca nhạc chất lượng cao"
    ],
    "answer": 0,
    "explain": "CU hoạt động như một 'nhạc trưởng': lấy lệnh từ bộ nhớ, giải mã lệnh và phát tín hiệu điều khiển tới ALU, thanh ghi và bus."
  },
  {
    "id": "b4-05",
    "q": "Đặc điểm nào sau đây là ĐÚNG khi nói về Thanh ghi (Register) của CPU?",
    "options": [
      "Nằm ngay bên trong CPU, có tốc độ truy xuất nhanh nhất trong hệ thống phân cấp bộ nhớ nhưng dung lượng rất nhỏ",
      "Có dung lượng khổng lồ hàng nghìn Terabyte để chứa toàn bộ Internet",
      "Là thiết bị cắm ngoài thông qua cổng USB",
      "Tốc độ đọc ghi chậm hơn rất nhiều so với đĩa cứng HDD"
    ],
    "answer": 0,
    "explain": "Thanh ghi được tích hợp trực tiếp trong lõi CPU, hoạt động cùng tốc độ xung nhịp CPU (cực nhanh), dùng để lưu tạm các toán hạng của lệnh đang xử lý."
  },
  {
    "id": "b4-06",
    "q": "Tốc độ xung nhịp (Clock Speed) của CPU thường được đo bằng đơn vị nào sau đây?",
    "options": [
      "Gigahertz (GHz)",
      "Gigabyte (GB)",
      "Megapixel (MP)",
      "Milliampere giờ (mAh)"
    ],
    "answer": 0,
    "explain": "Tốc độ xung nhịp đo số chu kỳ dao động mỗi giây của tinh thể thạch anh tạo xung nhịp đồng bộ trong CPU, đơn vị là GHz (tỷ chu kỳ/giây)."
  },
  {
    "id": "b4-07",
    "q": "Bus hệ thống (System Bus) trong máy tính có chức năng gì?",
    "options": [
      "Hệ thống các đường dẫn điện dùng để truyền tải tín hiệu địa chỉ, dữ liệu và điều khiển giữa các thành phần phần cứng",
      "Phần mềm dùng để vẽ các sơ đồ mạch điện tử",
      "Chuyến xe chở các linh kiện từ nhà máy về cửa hàng máy tính",
      "Thiết bị làm mát bằng chất lỏng chuyên dụng cho card đồ họa"
    ],
    "answer": 0,
    "explain": "Bus là tập hợp các đường dây dẫn kết nối CPU, bộ nhớ và các bộ điều khiển thiết bị vào/ra, gồm Data bus, Address bus và Control bus."
  },
  {
    "id": "b4-08",
    "q": "Điểm khác biệt cốt lõi giữa bộ nhớ RAM và bộ nhớ ROM là gì?",
    "options": [
      "RAM là bộ nhớ khả biến (mất dữ liệu khi ngắt điện), còn ROM là bộ nhớ bất biến (giữ nguyên dữ liệu khi mất điện)",
      "RAM không thể đọc được dữ liệu, còn ROM không thể ghi dữ liệu",
      "RAM chỉ dùng để lưu ảnh, còn ROM chỉ dùng để nghe nhạc",
      "RAM có tốc độ chậm hơn ổ đĩa quang CD-ROM"
    ],
    "answer": 0,
    "explain": "RAM (Random Access Memory) là bộ nhớ tạm thời, mất sạch dữ liệu khi mất điện; ROM (Read-Only Memory) lưu trữ cố định chương trình khởi động BIOS/UEFI."
  },
  {
    "id": "b4-09",
    "q": "Chương trình được cài sẵn trong chip nhớ ROM trên bo mạch chủ dùng để kiểm tra phần cứng khi khởi động máy tính có tên là:",
    "options": [
      "BIOS hoặc UEFI",
      "Microsoft Windows",
      "Google Chrome",
      "Adobe Reader"
    ],
    "answer": 0,
    "explain": "Firmware BIOS/UEFI được nhà sản xuất nạp sẵn trong ROM, thực hiện quá trình POST (kiểm tra phần cứng) và nạp hệ điều hành từ ổ đĩa vào RAM."
  },
  {
    "id": "b4-10",
    "q": "So với ổ đĩa cứng cơ học HDD, ổ đĩa thể rắn SSD có ưu điểm vượt trội nào?",
    "options": [
      "Tốc độ đọc ghi dữ liệu nhanh hơn gấp nhiều lần, chống sốc tốt và không gây tiếng ồn",
      "Giá thành trên mỗi Gigabyte rẻ hơn HDD gấp mười lần",
      "Có các phiến đĩa từ quay với tốc độ 7200 vòng/phút",
      "Không bao giờ bị giới hạn dung lượng lưu trữ"
    ],
    "answer": 0,
    "explain": "SSD sử dụng các chip nhớ flash bán dẫn, không có bộ phận cơ học chuyển động nên tốc độ vượt trội, êm ái và không bị ảnh hưởng bởi rung lắc."
  },
  {
    "id": "b4-11",
    "q": "Chuẩn giao tiếp ổ cứng SSD nào sau đây cho tốc độ truyền tải dữ liệu cao nhất hiện nay trên máy tính hiện đại?",
    "options": [
      "NVMe qua khe cắm PCIe",
      "SATA III",
      "IDE / ATA cổ điển",
      "Đĩa mềm Floppy 1.44MB"
    ],
    "answer": 0,
    "explain": "SSD chuẩn NVMe (khe M.2 PCIe) cho tốc độ đọc ghi từ 3500MB/s đến hơn 7000MB/s, vượt xa giới hạn khoảng 550MB/s của chuẩn SATA III."
  },
  {
    "id": "b4-12",
    "q": "Cổng logic AND cho giá trị đầu ra bằng 1 khi nào?",
    "options": [
      "Khi TẤT CẢ các đầu vào đều bằng 1",
      "Khi có ít nhất một đầu vào bằng 1",
      "Khi tất cả các đầu vào đều bằng 0",
      "Khi hai đầu vào có giá trị trái ngược nhau"
    ],
    "answer": 0,
    "explain": "Phép logic AND (Và): Y = A . B. Đầu ra chỉ bằng 1 (Đúng) khi cả hai đầu vào A và B đồng thời bằng 1."
  },
  {
    "id": "b4-13",
    "q": "Cổng logic OR cho giá trị đầu ra bằng 0 khi nào?",
    "options": [
      "Khi TẤT CẢ các đầu vào đều bằng 0",
      "Khi tất cả các đầu vào đều bằng 1",
      "Khi có ít nhất một đầu vào bằng 1",
      "Khi đầu vào A bằng 1 và đầu vào B bằng 0"
    ],
    "answer": 0,
    "explain": "Phép logic OR (Hoặc): Y = A + B. Đầu ra chỉ bằng 0 khi cả hai đầu vào A và B đều bằng 0."
  },
  {
    "id": "b4-14",
    "q": "Cổng logic NOT (cổng đảo) có chức năng:",
    "options": [
      "Đảo ngược giá trị đầu vào: đầu vào là 0 cho đầu ra là 1, đầu vào là 1 cho đầu ra là 0",
      "Nhân đôi giá trị của bit đầu vào",
      "Giữ nguyên giá trị của đầu vào mà không thay đổi",
      "Tạo ra hai đầu ra có giá trị hoàn toàn bằng 0"
    ],
    "answer": 0,
    "explain": "Cổng NOT có 1 đầu vào và 1 đầu ra, làm nhiệm vụ phủ định logic: NOT(0) = 1 và NOT(1) = 0."
  },
  {
    "id": "b4-15",
    "q": "Cổng logic XOR (Exclusive OR - Hoặc loại trừ) cho giá trị đầu ra bằng 1 khi nào?",
    "options": [
      "Khi hai giá trị đầu vào KHÁC NHAU (một bên là 0, một bên là 1)",
      "Khi cả hai giá trị đầu vào đều bằng 1",
      "Khi cả hai giá trị đầu vào đều bằng 0",
      "Trong mọi trường hợp đầu ra luôn bằng 1"
    ],
    "answer": 0,
    "explain": "Cổng XOR cho đầu ra bằng 1 khi 2 đầu vào khác nhau: 0 XOR 1 = 1, 1 XOR 0 = 1; và bằng 0 khi 2 đầu vào giống nhau: 0 XOR 0 = 0, 1 XOR 1 = 0."
  },
  {
    "id": "b4-16",
    "q": "Trong mạch cộng bán phần (Half Adder) dùng để cộng hai bit nhị phân A và B, bit Tổng (Sum) và bit Nhớ (Carry) được tính bằng các cổng logic nào?",
    "options": [
      "Sum = A XOR B; Carry = A AND B",
      "Sum = A AND B; Carry = A OR B",
      "Sum = A OR B; Carry = NOT A",
      "Sum = NOT B; Carry = A XOR B"
    ],
    "answer": 0,
    "explain": "Khi cộng 2 bit: 0+0=(Sum 0, Carry 0); 0+1=(Sum 1, Carry 0); 1+0=(Sum 1, Carry 0); 1+1=(Sum 0, Carry 1). Do đó Sum = A XOR B, Carry = A AND B."
  },
  {
    "id": "b4-17",
    "q": "Mạch cộng toàn phần (Full Adder) khác với mạch cộng bán phần (Half Adder) ở điểm nào?",
    "options": [
      "Full Adder có 3 đầu vào: cộng được 2 bit dữ liệu cùng với bit nhớ (Carry-in) từ hàng trước chuyển sang",
      "Full Adder chỉ thực hiện được phép trừ, không cộng được",
      "Full Adder chỉ có một đầu ra duy nhất",
      "Full Adder được làm bằng bóng đèn thủy tinh thay vì bán dẫn"
    ],
    "answer": 0,
    "explain": "Full Adder có 3 ngõ vào (A, B và Cin) và 2 ngõ ra (Sum và Cout), cho phép ghép nối tiếp nhiều mạch để cộng các số nhị phân nhiều bit."
  },
  {
    "id": "b4-18",
    "q": "Bo mạch chủ (Motherboard) trong thùng máy tính đóng vai trò là:",
    "options": [
      "Bản mạch in trung tâm liên kết và cấp nguồn/tín hiệu cho tất cả các linh kiện (CPU, RAM, card đồ họa, ổ đĩa...)",
      "Tấm pin năng lượng mặt trời dùng để sạc máy tính",
      "Hộp sắt dùng để đựng chuột và bàn phím dự phòng",
      "Màn hình phụ hiển thị tin tức thời tiết"
    ],
    "answer": 0,
    "explain": "Motherboard chứa các khe cắm (socket CPU, khe RAM, khe PCIe), chipset điều khiển và các đường bus truyền dẫn tín hiệu giữa các linh kiện."
  },
  {
    "id": "b4-19",
    "q": "Bộ nhớ đệm (Cache) của CPU được chia thành các cấp (L1, L2, L3) nhằm mục đích gì?",
    "options": [
      "Giảm thời gian chờ đợi của CPU khi phải lấy dữ liệu từ bộ nhớ RAM có tốc độ chậm hơn",
      "Lưu trữ các tệp phim ảnh đã xem để xem lại ngoại tuyến",
      "Bảo vệ CPU không bị dính nước khi trời mưa",
      "Phát sóng Wi-Fi cho các phòng học lân cận"
    ],
    "answer": 0,
    "explain": "Cache là bộ nhớ SRAM siêu nhanh nằm sát hoặc ngay trong nhân CPU, lưu các chỉ thị và dữ liệu hay dùng để CPU không phải chờ RAM phản hồi."
  },
  {
    "id": "b4-20",
    "q": "Khi xem cấu hình một máy tính có ghi: 'Intel Core i5, 4.2 GHz, 16 GB DDR4, 512 GB SSD NVMe', thông số '16 GB DDR4' chỉ:",
    "options": [
      "Dung lượng và chuẩn công nghệ của bộ nhớ trong RAM",
      "Dung lượng của ổ đĩa cứng lưu trữ dữ liệu",
      "Tốc độ vòng quay của quạt làm mát",
      "Độ phân giải của màn hình máy tính"
    ],
    "answer": 0,
    "explain": "16 GB là dung lượng bộ nhớ truy cập ngẫu nhiên (RAM), DDR4 là chuẩn công nghệ bus của thanh RAM đó."
  },
  {
    "id": "b4-21",
    "q": "Card đồ họa rời (GPU - Graphics Processing Unit) có thế mạnh đặc biệt trong việc:",
    "options": [
      "Xử lý song song hàng ngàn luồng tính toán đồng thời cho đồ họa 3D, dựng phim và tính toán mô hình trí tuệ nhân tạo (AI)",
      "In văn bản ra máy in với tốc độ nhanh nhất",
      "Dọn dẹp sạch sẽ các tệp rác trong thùng rác Windows",
      "Phát hiện mùi khét khi máy tính bị chập điện"
    ],
    "answer": 0,
    "explain": "GPU sở hữu kiến trúc gồm hàng nghìn nhân xử lý tính toán song song, cực kỳ hiệu quả cho xử lý ma trận điểm ảnh, render video và huấn luyện AI."
  },
  {
    "id": "b4-22",
    "q": "Bộ nguồn máy tính (PSU - Power Supply Unit) có vai trò gì trong thùng máy tính?",
    "options": [
      "Chuyển đổi dòng điện xoay chiều AC từ điện lưới thành các dòng điện một chiều DC (12V, 5V, 3.3V) cấp cho các linh kiện",
      "Đo lường tốc độ gõ bàn phím của người dùng",
      "Chứa hệ điều hành Windows bản quyền",
      "Tăng tốc độ lướt web khi nghẽn mạng"
    ],
    "answer": 0,
    "explain": "PSU là trái tim cung cấp năng lượng, hạ áp và nắn dòng điện lưới an toàn thành điện áp DC tiêu chuẩn cho bo mạch chủ, CPU và card đồ họa."
  },
  {
    "id": "b4-23",
    "q": "Đơn vị đo dung lượng lưu trữ thông tin nào sau đây có giá trị lớn nhất?",
    "options": [
      "Terabyte (TB)",
      "Gigabyte (GB)",
      "Megabyte (MB)",
      "Kilobyte (KB)"
    ],
    "answer": 0,
    "explain": "Theo thứ tự tăng dần: 1 Byte < 1 KB (1024 B) < 1 MB (1024 KB) < 1 GB (1024 MB) < 1 TB (1024 GB)."
  },
  {
    "id": "b4-24",
    "q": "Tại sao các mạch điện tử trong máy tính lại sử dụng hệ đếm nhị phân (chỉ gồm hai chữ số 0 và 1) để biểu diễn và xử lý thông tin?",
    "options": [
      "Vì trạng thái nhị phân 0 và 1 tương ứng hoàn hảo với hai trạng thái vật lý đóng/ngắt (có điện / không có điện) của bóng bán dẫn Transistor",
      "Vì con người không thể phát minh ra các phép toán với hệ đếm thập phân",
      "Vì hệ nhị phân giúp bàn phím máy tính chỉ cần có 2 nút bấm duy nhất",
      "Vì luật pháp quốc tế cấm máy tính dùng hệ đếm cơ số 10"
    ],
    "answer": 0,
    "explain": "Bóng bán dẫn (transistor) trong vi mạch hoạt động như công tắc: có điện áp (mức cao tương ứng bit 1) và không có điện áp (mức thấp tương ứng bit 0), rất tin cậy và chống nhiễu tốt."
  }
];
