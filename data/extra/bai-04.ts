import { LessonExtra } from "@/lib/types";

// Bài 4: Bên trong máy tính (Đúng/Sai & Tự luận / Trả lời ngắn)
export const extra: LessonExtra = {
  "tf": [
    {
      "id": "b4-tf1",
      "context": "Bạn Hùng tìm hiểu về kiến trúc phần cứng bên trong thùng máy tính và cấu trúc của bộ xử lý trung tâm (CPU). Hùng ghi chép các nội dung sau:",
      "statements": [
        {
          "text": "a) CPU được coi là bộ não của máy tính, bao gồm ba khối chính: Khối số học và logic (ALU), Khối điều khiển (CU) và Các thanh ghi (Registers).",
          "answer": true,
          "explain": "Đúng. Đây là cấu trúc kinh điển ba thành phần cơ bản cấu thành CPU."
        },
        {
          "text": "b) Thanh ghi (Registers) trong CPU có dung lượng lưu trữ lớn hơn cả thanh RAM và ổ cứng SSD cộng lại.",
          "answer": false,
          "explain": "Sai. Thanh ghi chỉ có dung lượng rất nhỏ (vài chục đến vài nghìn byte) nhưng có tốc độ truy xuất nhanh nhất."
        },
        {
          "text": "c) Khối số học và logic (ALU) chịu trách nhiệm thực thi các phép tính cộng, trừ, nhân, chia và các phép so sánh nhị phân.",
          "answer": true,
          "explain": "Đúng. Đây là chức năng xử lý toán học và logic trực tiếp của ALU."
        },
        {
          "text": "d) Tốc độ xung nhịp 3.6 GHz của CPU có nghĩa là CPU thực hiện được khoảng 3,6 triệu phép tính trong một ngày.",
          "answer": false,
          "explain": "Sai. 3.6 GHz nghĩa là 3,6 tỷ chu kỳ dao động xung nhịp trong MỘT GIÂY (chứ không phải 3,6 triệu trong một ngày)."
        }
      ]
    },
    {
      "id": "b4-tf2",
      "context": "Khi phân biệt giữa bộ nhớ trong (RAM, ROM) và thiết bị lưu trữ ngoài (HDD, SSD), nhóm học sinh đưa ra các nhận định sau:",
      "statements": [
        {
          "text": "a) Dữ liệu lưu trong bộ nhớ RAM sẽ bị mất sạch hoàn toàn ngay khi máy tính bị ngắt nguồn điện.",
          "answer": true,
          "explain": "Đúng. RAM là bộ nhớ khả biến (Volatile Memory), cần duy trì dòng điện liên tục để giữ dữ liệu."
        },
        {
          "text": "b) Chương trình BIOS/UEFI được lưu trong chip nhớ ROM trên bo mạch chủ để đảm bảo không bị mất đi khi tắt máy tính.",
          "answer": true,
          "explain": "Đúng. ROM là bộ nhớ bất biến (Non-volatile Memory), lưu firmware khởi động của hệ thống."
        },
        {
          "text": "c) Ổ đĩa SSD đọc ghi dữ liệu dựa trên chuyển động quay của các phiến đĩa từ tính và đầu đọc cơ học.",
          "answer": false,
          "explain": "Sai. Đó là nguyên lý của ổ HDD; ổ SSD lưu dữ liệu hoàn toàn trên các chip nhớ bán dẫn flash không có cơ cấu chuyển động."
        },
        {
          "text": "d) Ổ đĩa SSD chuẩn giao tiếp NVMe cắm qua khe PCIe có tốc độ đọc ghi vượt trội hơn đáng kể so với ổ SSD chuẩn SATA III.",
          "answer": true,
          "explain": "Đúng. NVMe PCIe có băng thông rộng gấp nhiều lần cổng SATA III cũ."
        }
      ]
    },
    {
      "id": "b4-tf3",
      "context": "Trong bài học về mạch logic và đại số Boole, thầy giáo cho hai biến nhị phân A và B và yêu cầu học sinh xác định bảng chân lý của các cổng logic:",
      "statements": [
        {
          "text": "a) Cổng logic AND cho đầu ra bằng 1 khi cả hai đầu vào A = 1 và B = 1.",
          "answer": true,
          "explain": "Đúng. 1 AND 1 = 1, các trường hợp khác đều cho kết quả 0."
        },
        {
          "text": "b) Cổng logic OR cho đầu ra bằng 1 khi có ít nhất một đầu vào bằng 1 (ví dụ A = 1 hoặc B = 1).",
          "answer": true,
          "explain": "Đúng. 1 OR 0 = 1; 0 OR 1 = 1; 1 OR 1 = 1; chỉ có 0 OR 0 = 0."
        },
        {
          "text": "c) Cổng NOT nhận đầu vào là bit 0 thì sẽ cho đầu ra là bit 0 nguyên vẹn.",
          "answer": false,
          "explain": "Sai. Cổng NOT là cổng đảo bit: đầu vào 0 cho đầu ra 1, đầu vào 1 cho đầu ra 0."
        },
        {
          "text": "d) Cổng XOR cho đầu ra bằng 1 khi hai đầu vào có giá trị trái ngược nhau (0 XOR 1 = 1 và 1 XOR 0 = 1).",
          "answer": true,
          "explain": "Đúng. Cổng XOR (Exclusive OR) phát hiện sự khác biệt giữa hai đầu vào."
        }
      ]
    },
    {
      "id": "b4-tf4",
      "context": "Khi tìm hiểu về mạch cộng nhị phân trong bộ xử lý máy tính:",
      "statements": [
        {
          "text": "a) Mạch cộng bán phần (Half Adder) nhận 2 bit nhị phân A, B và tạo ra 2 đầu ra gồm bit Tổng (Sum) và bit Nhớ (Carry).",
          "answer": true,
          "explain": "Đúng. Công thức là Sum = A XOR B và Carry = A AND B."
        },
        {
          "text": "b) Mạch cộng bán phần có thể tiếp nhận và cộng được bit nhớ chuyển sang từ hàng trước đó.",
          "answer": false,
          "explain": "Sai. Half Adder chỉ có 2 đầu vào, không có ngõ vào cho bit nhớ trước; mạch cộng toàn phần (Full Adder) mới có 3 ngõ vào để nhận bit nhớ trước."
        },
        {
          "text": "c) Khi ghép nối tiếp nhiều mạch cộng toàn phần (Full Adder) lại với nhau, ta có thể xây dựng mạch cộng số nhị phân nhiều bit (ví dụ 8 bit, 32 bit, 64 bit).",
          "answer": true,
          "explain": "Đúng. Đầu ra Cout của mạch cộng trước được nối vào đầu vào Cin của mạch cộng kế tiếp."
        },
        {
          "text": "d) Toàn bộ các mạch logic trong máy tính hiện đại được cấu tạo từ các bóng đèn điện tử chân không khổng lồ.",
          "answer": false,
          "explain": "Sai. Máy tính hiện đại tích hợp hàng tỷ bóng bán dẫn siêu vi (Transistor) trên vi mạch tích hợp bán dẫn Silicon (Chip IC)."
        }
      ]
    }
  ],
  "essay": [
    {
      "id": "b4-es1",
      "q": "Trình bày các thành phần chính của kiến trúc máy tính Von Neumann và nêu rõ chức năng của từng thành phần.",
      "answer": "Kiến trúc Von Neumann gồm 3 khối thành phần cốt lõi:\n1. Bộ xử lý trung tâm (CPU): Đóng vai trò bộ não, bao gồm Khối số học và logic (ALU) để tính toán dữ liệu, Khối điều khiển (CU) để chỉ huy nhịp độ thực thi lệnh, và Các thanh ghi (Registers) để lưu tạm dữ liệu siêu tốc.\n2. Bộ nhớ (Memory): Gồm bộ nhớ trong (RAM lưu chương trình/dữ liệu tạm thời khi chạy; ROM lưu firmware BIOS/UEFI khởi động) và bộ nhớ ngoài (SSD, HDD lưu trữ dữ liệu lâu dài).\n3. Hệ thống vào/ra (I/O System): Các thiết bị nhập dữ liệu (bàn phím, chuột, micro...) và xuất thông tin (màn hình, loa, máy in...) kết nối qua các cổng giao tiếp và bus hệ thống."
    },
    {
      "id": "b4-es2",
      "q": "Lập bảng chân lý và viết biểu thức logic cho bit Tổng (Sum) và bit Nhớ (Carry) của mạch cộng bán phần (Half Adder) khi cộng hai bit A và B.",
      "answer": "1. Bảng chân lý phép cộng 2 bit (Half Adder):\n- A = 0, B = 0 => Tổng (Sum) = 0, Nhớ (Carry) = 0\n- A = 0, B = 1 => Tổng (Sum) = 1, Nhớ (Carry) = 0\n- A = 1, B = 0 => Tổng (Sum) = 1, Nhớ (Carry) = 0\n- A = 1, B = 1 => Tổng (Sum) = 0, Nhớ (Carry) = 1 (vì 1 + 1 = 10 trong hệ nhị phân)\n\n2. Biểu thức logic:\n- Bit Tổng: Sum = A XOR B (hoặc A ⊕ B)\n- Bit Nhớ: Carry = A AND B (hoặc A . B)"
    },
    {
      "id": "b4-es3",
      "q": "Phân tích vì sao máy tính hiện đại sử dụng ổ đĩa thể rắn SSD thay thế cho ổ đĩa HDD truyền thống lại giúp máy tính khởi động và mở ứng dụng nhanh hơn rõ rệt.",
      "answer": "1. Khác biệt về cấu tạo vật lý:\n- Ổ HDD sử dụng động cơ quay đĩa từ tính (thường 5400-7200 vòng/phút) và tay cần cơ học di chuyển đầu từ để đọc ghi dữ liệu. Thời gian tìm kiếm cơ học (seek time) mất từ 5-15 mili-giây cho mỗi vị trí đọc.\n- Ổ SSD sử dụng mảng chip nhớ bán dẫn Flash NAND tĩnh, không có chi tiết chuyển động cơ khí nào. Thời gian truy cập ô nhớ gần như tức thời (< 0.1 mili-giây).\n\n2. Hiệu quả thực tế:\n- Tốc độ truyền tải: Ổ SSD SATA đạt ~550 MB/s, SSD NVMe đạt 3500 - 7000 MB/s, cao gấp 4 đến 50 lần so với HDD (khoảng 100-150 MB/s).\n- Khởi động Windows: Hệ điều hành cần nạp hàng ngàn tệp tin nhỏ rải rác. SSD đọc ngẫu nhiên (Random 4K) nhanh gấp hàng trăm lần HDD, giúp thời gian khởi động máy giảm từ 1-2 phút xuống chỉ còn 5-10 giây, ứng dụng nặng mở tức thì."
    },
    {
      "id": "b4-es4",
      "q": "Giải thích ý nghĩa của các thông số kỹ thuật sau trên một máy tính xách tay: 'CPU 8 nhân 16 luồng, Xung nhịp tối đa 4.5 GHz, RAM 16 GB DDR4, Ổ cứng 512 GB SSD NVMe M.2'.",
      "answer": "Ý nghĩa các thông số kỹ thuật:\n1. 'CPU 8 nhân 16 luồng': Bộ vi xử lý có 8 lõi vật lý độc lập cùng khả năng siêu phân luồng (Hyper-Threading) giả lập thành 16 luồng tính toán song song, giúp xử lý mượt mà nhiều tác vụ nặng cùng lúc.\n2. 'Xung nhịp tối đa 4.5 GHz': Tốc độ xung nhịp cực đại của CPU có thể đạt 4,5 tỷ chu kỳ mỗi giây khi kích hoạt chế độ tăng tốc Turbo Boost, mang lại khả năng xử lý tác vụ đơn nhân cực nhanh.\n3. 'RAM 16 GB DDR4': Dung lượng bộ nhớ trong là 16 Gigabyte theo chuẩn công nghệ DDR4 thế hệ mới, cho phép mở hàng chục tab trình duyệt và phần mềm đồ họa cùng lúc mà không bị tràn bộ nhớ.\n4. 'Ổ cứng 512 GB SSD NVMe M.2': Thiết bị lưu trữ lâu dài có sức chứa 512 Gigabyte, dạng thẻ cắm M.2 nhỏ gọn giao tiếp qua chuẩn NVMe siêu tốc, cho tốc độ nạp tệp và khởi động hệ điều hành nhanh vượt trội."
    }
  ]
};
