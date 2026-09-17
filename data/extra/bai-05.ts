import { LessonExtra } from "@/lib/types";

// Bài 5: Kết nối máy tính với các thiết bị số (Đúng/Sai & Tự luận / Trả lời ngắn)
export const extra: LessonExtra = {
  "tf": [
    {
      "id": "b5-tf1",
      "context": "Trong giờ học Tin học 11, nhóm của bạn Mai được giao nhiệm vụ kết nối máy tính xách tay với máy chiếu trong lớp và kết nối chuột không dây Bluetooth để chuẩn bị cho buổi báo cáo chuyên đề:",
      "statements": [
        {
          "text": "a) Cổng HDMI có khả năng truyền đồng thời cả tín hiệu hình ảnh độ nét cao và tín hiệu âm thanh qua một sợi cáp duy nhất.",
          "answer": true,
          "explain": "Đúng. HDMI là chuẩn kết nối số truyền cả video và audio đa kênh."
        },
        {
          "text": "b) Chuẩn kết nối không dây Bluetooth hoạt động trong phạm vi cự ly ngắn (thường dưới 10m) và tiêu thụ điện năng thấp.",
          "answer": true,
          "explain": "Đúng. Đây là đặc tính kỹ thuật tối ưu của công nghệ vô tuyến Bluetooth."
        },
        {
          "text": "c) Khi dùng tổ hợp phím Windows + P và chọn chế độ 'Duplicate', màn hình máy tính và màn hình máy chiếu sẽ hiển thị hai nội dung hoàn toàn khác biệt nhau.",
          "answer": false,
          "explain": "Sai. Chế độ Duplicate sẽ nhân bản, hiển thị hình ảnh giống hệt nhau trên cả hai màn hình; chế độ Extend mới hiển thị nội dung khác nhau."
        },
        {
          "text": "d) Chuẩn cổng VGA là chuẩn tín hiệu số hiện đại có tốc độ truyền nhanh hơn nhiều so với cổng HDMI và DisplayPort.",
          "answer": false,
          "explain": "Sai. VGA là chuẩn tín hiệu tương tự (Analog) cũ, không truyền được âm thanh và chất lượng kém hơn HDMI/DisplayPort."
        }
      ]
    },
    {
      "id": "b5-tf2",
      "context": "Bạn Tuấn cắm cáp kết nối điện thoại Android của mình vào cổng USB của máy tính để bàn để lấy các bức ảnh chụp chuyến đi dã ngoại:",
      "statements": [
        {
          "text": "a) Khi điện thoại hiển thị thông báo kết nối, Tuấn cần chọn chế độ 'Truyền tệp' (File Transfer / MTP) thì máy tính mới đọc được các thư mục ảnh trong điện thoại.",
          "answer": true,
          "explain": "Đúng. Nếu để mặc định ở chế độ 'Chỉ sạc' (Charging only), máy tính sẽ không hiển thị ổ lưu trữ của điện thoại."
        },
        {
          "text": "b) Cổng USB Type-C trên điện thoại có thiết kế đối xứng nên Tuấn có thể cắm theo bất kỳ chiều nào mà không lo bị ngược.",
          "answer": true,
          "explain": "Đúng. Khả năng cắm hai chiều đối xứng là cải tiến vượt trội của USB Type-C so với Micro-USB cũ."
        },
        {
          "text": "c) Mọi bức ảnh sao chép từ điện thoại sang máy tính qua cáp USB đều tự động bị giảm độ phân giải xuống còn 1 megapixel.",
          "answer": false,
          "explain": "Sai. Truyền qua cáp USB là sao chép tệp nhị phân nguyên bản, giữ nguyên 100% chất lượng ảnh gốc."
        },
        {
          "text": "d) Tuấn có thể bật tính năng 'Chia sẻ kết nối Internet qua USB' (USB Tethering) trên điện thoại để máy tính có thể vào Internet bằng mạng 4G của điện thoại.",
          "answer": true,
          "explain": "Đúng. Đây là tính năng rất hữu ích khi máy tính bàn không có card Wi-Fi hay dây mạng LAN."
        }
      ]
    },
    {
      "id": "b5-tf3",
      "context": "Khi tìm hiểu về Trình điều khiển thiết bị (Driver) và công cụ Device Manager trong hệ điều hành Windows:",
      "statements": [
        {
          "text": "a) Trình điều khiển thiết bị (Device Driver) là phần mềm trung gian giúp hệ điều hành điều khiển và khai thác tính năng của phần cứng ngoại vi.",
          "answer": true,
          "explain": "Đúng. Đây là định nghĩa chuẩn xác về vai trò của Driver."
        },
        {
          "text": "b) Trong Device Manager, nếu một thiết bị phần cứng xuất hiện dấu chấm than vàng, điều đó chứng tỏ thiết bị đang gặp sự cố hoặc chưa nhận đúng driver.",
          "answer": true,
          "explain": "Đúng. Ký hiệu cảnh báo màu vàng thông báo thiết bị phần cứng chưa thể hoạt động bình thường."
        },
        {
          "text": "c) Hệ điều hành Windows hiện đại hoàn toàn không cần bất kỳ driver nào vẫn có thể điều khiển được tất cả các loại card đồ họa và máy in phức tạp nhất.",
          "answer": false,
          "explain": "Sai. Mặc dù Windows có sẵn driver generic cơ bản, nhưng các phần cứng chuyên sâu luôn đòi hỏi cài driver chính thức từ nhà sản xuất."
        },
        {
          "text": "d) Người dùng có thể cập nhật driver cho phần cứng bằng cách nhấp chuột phải vào thiết bị trong Device Manager và chọn 'Update driver'.",
          "answer": true,
          "explain": "Đúng. Đây là thao tác cập nhật driver trực tiếp trong Windows."
        }
      ]
    },
    {
      "id": "b5-tf4",
      "context": "Khi sử dụng và bảo quản thiết bị lưu trữ di động USB trên máy tính cá nhân:",
      "statements": [
        {
          "text": "a) Thao tác chọn lệnh 'Eject' trước khi rút USB giúp đảm bảo dữ liệu ghi đệm đã hoàn tất và bảo vệ chip nhớ USB khỏi hỏng hóc.",
          "answer": true,
          "explain": "Đúng. Rút USB an toàn (Safely Remove Hardware) tránh lỗi hỏng hệ thống tệp."
        },
        {
          "text": "b) Chân cắm màu xanh dương bên trong cổng cắm USB là đặc điểm nhận dạng quy ước của chuẩn USB 3.0 tốc độ cao.",
          "answer": true,
          "explain": "Đúng. Màu xanh dương biểu thị chuẩn SuperSpeed USB 3.0."
        },
        {
          "text": "c) Mọi tệp tin đuôi .exe chứa trong thẻ USB lạ mượn từ người khác đều hoàn toàn an toàn và nên bấm mở ngay lập tức.",
          "answer": false,
          "explain": "Sai. Tệp .exe là tệp chương trình thực thi, có nguy cơ rất cao chứa virus hoặc phần mềm gián điệp."
        },
        {
          "text": "d) Quét virus USB bằng phần mềm diệt virus trước khi mở sao chép dữ liệu là thói quen sử dụng máy tính an toàn và văn minh.",
          "answer": true,
          "explain": "Đúng. Đây là nguyên tắc phòng ngừa lây lan mã độc hàng đầu."
        }
      ]
    }
  ],
  "essay": [
    {
      "id": "b5-es1",
      "q": "So sánh ưu điểm và hạn chế giữa cổng kết nối hình ảnh VGA (truyền thống) và cổng HDMI (hiện đại).",
      "answer": "1. Cổng VGA (Video Graphics Array):\n- Ưu điểm: Phổ biến trên các thiết bị đời cũ (máy chiếu cũ, màn hình CRT, thùng máy cũ); chi phí sản xuất thấp.\n- Hạn chế: Truyền tín hiệu tương tự (Analog) nên chất lượng dễ bị nhòe, nhiễu sóng khi lên độ phân giải cao; không truyền được âm thanh (phải cắm thêm dây audio 3.5mm riêng); đầu cắm to cồng kềnh với 2 ốc vít cố định.\n\n2. Cổng HDMI (High-Definition Multimedia Interface):\n- Ưu điểm: Truyền tín hiệu số (Digital) cho hình ảnh sắc nét độ phân giải cao (Full HD, 2K, 4K); truyền đồng thời cả hình ảnh và âm thanh vòm đa kênh trên một sợi cáp duy nhất; đầu cắm nhỏ gọn, tiện lợi cắm rút.\n- Hạn chế: Giới hạn chiều dài cáp truyền thông thường (nếu truyền xa trên 15m cần có bộ khuếch đại tín hiệu)."
    },
    {
      "id": "b5-es2",
      "q": "Nêu các bước kết nối máy tính xách tay với máy chiếu trong lớp học và giải thích sự khác biệt giữa hai chế độ hiển thị 'Duplicate' và 'Extend'.",
      "answer": "1. Các bước kết nối:\n- Bước 1: Cắm đầu cáp HDMI (hoặc VGA) từ máy chiếu vào cổng kết nối tương ứng trên thân máy tính xách tay.\n- Bước 2: Bật nguồn máy chiếu và bật nguồn máy tính.\n- Bước 3: Trên bàn phím máy tính, nhấn tổ hợp phím Windows + P để mở thanh bảng chọn chế độ trình chiếu (Project).\n- Bước 4: Nhấp chuột chọn chế độ hiển thị phù hợp (Duplicate hoặc Extend).\n\n2. Phân biệt Duplicate và Extend:\n- Chế độ Duplicate (Nhân bản): Màn hình máy tính và máy chiếu hiển thị hình ảnh hoàn toàn giống hệt nhau. Thích hợp khi thuyết trình nội dung trực quan cho cả lớp cùng xem theo thao tác của người nói.\n- Chế độ Extend (Mở rộng): Màn hình máy tính và máy chiếu trở thành hai không gian làm việc độc lập. Giáo viên có thể kéo cửa sổ trình chiếu slide sang máy chiếu cho học sinh xem, trong khi trên màn hình máy tính xách tay vẫn mở file giáo án hoặc chấm điểm riêng tư mà học sinh không nhìn thấy."
    },
    {
      "id": "b5-es3",
      "q": "Trình điều khiển thiết bị (Device Driver) là gì? Khi nào người dùng máy tính cần phải cài đặt hoặc cập nhật driver mới?",
      "answer": "1. Khái niệm Driver: Trình điều khiển thiết bị là phần mềm đặc biệt đóng vai trò cầu nối trung gian giữa hệ điều hành và một thiết bị phần cứng cụ thể (máy in, card màn hình, webcam...). Nó dịch các lệnh chung của hệ điều hành thành các tín hiệu lệnh chi tiết mà phần cứng đó có thể hiểu và thực thi.\n\n2. Khi nào cần cài đặt hoặc cập nhật driver:\n- Khi vừa mua hoặc cắm một thiết bị ngoại vi mới vào máy mà hệ điều hành không tự động nhận diện được (hiện dấu chấm than vàng trong Device Manager, máy in không in được, loa không kêu...).\n- Khi nâng cấp hoặc cài đặt mới hệ điều hành Windows.\n- Khi nhà sản xuất phần cứng (như NVIDIA, AMD, Intel) phát hành phiên bản driver mới nhằm sửa chữa các lỗi bảo mật, khắc phục tình trạng treo máy hoặc tăng tốc hiệu năng cho phần mềm đồ họa/game.\n- Khi thiết bị đang dùng bỗng nhiên hoạt động chập chờn, bị lỗi màn hình xanh (BSOD) do xung đột phần mềm."
    },
    {
      "id": "b5-es4",
      "q": "Em hãy nêu các cách kết nối một chiếc điện thoại thông minh với máy tính để bàn và chỉ ra tình huống phù hợp cho từng cách kết nối.",
      "answer": "Các cách kết nối phổ biến:\n1. Kết nối bằng cáp USB (có dây):\n- Cách thực hiện: Dùng dây cáp USB cắm một đầu vào điện thoại và một đầu vào cổng USB máy tính; trên điện thoại chọn chế độ 'Truyền tệp' (MTP).\n- Tình huống phù hợp: Cần sao chép nhanh một lượng lớn tệp tin nặng (video nhiều Gigabyte, hàng nghìn bức ảnh), vừa truyền tệp vừa sạc pin cho điện thoại, hoặc dùng làm modem chia sẻ mạng 4G (USB Tethering) khi máy tính mất mạng.\n\n2. Kết nối không dây qua Bluetooth:\n- Cách thực hiện: Bật Bluetooth trên cả hai thiết bị, thực hiện ghép đôi (Pairing) an toàn qua mã xác thực.\n- Tình huống phù hợp: Cần gửi nhanh 1-2 tệp tài liệu văn bản nhẹ hoặc ảnh nhỏ khi không mang theo cáp nối.\n\n3. Kết nối đồng bộ qua mạng đám mây (Internet / Wi-Fi):\n- Cách thực hiện: Dùng chung một tài khoản đám mây (Google Drive, Zalo, OneDrive) trên cả điện thoại và máy tính.\n- Tình huống phù hợp: Hai thiết bị ở xa nhau về mặt địa lý, hoặc muốn lưu trữ dự phòng lâu dài mà không cần cắm nối dây dợ phức tạp."
    }
  ]
};
