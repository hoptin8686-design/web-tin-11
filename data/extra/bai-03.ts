import { LessonExtra } from "@/lib/types";

// Bài 3: Phần mềm nguồn mở và phần mềm chạy trên Internet (Đúng/Sai & Tự luận / Trả lời ngắn)
export const extra: LessonExtra = {
  "tf": [
    {
      "id": "b3-tf1",
      "context": "Nhà trường dự định trang bị phần mềm tin học văn phòng cho 40 máy tính tại phòng thực hành. Thầy hiệu phó đề xuất mua gói bản quyền Microsoft Office, trong khi cô giáo bộ môn Tin học đề xuất cài đặt bộ phần mềm nguồn mở LibreOffice. Hai bên đưa ra các lập luận:",
      "statements": [
        {
          "text": "a) Cài đặt LibreOffice giúp nhà trường tiết kiệm đáng kể kinh phí vì đây là phần mềm mã nguồn mở miễn phí và hoàn toàn hợp pháp.",
          "answer": true,
          "explain": "Đúng. LibreOffice phát hành miễn phí theo giấy phép mã nguồn mở cho mọi cá nhân và tổ chức giáo dục."
        },
        {
          "text": "b) Sử dụng phần mềm Microsoft Office bẻ khóa (crack) tải từ trang web lậu là việc làm hợp pháp và được khuyến khích trong môi trường học đường.",
          "answer": false,
          "explain": "Sai. Dùng phần mềm bẻ khóa là vi phạm Luật Sở hữu trí tuệ nghiêm trọng và tiềm ẩn nguy cơ nhiễm virus mã độc tống tiền."
        },
        {
          "text": "c) Học sinh học các kỹ năng định dạng văn bản, bảng tính trên LibreOffice hoàn toàn có thể áp dụng tương tự trên Microsoft Office vì nguyên lý xử lý cốt lõi là giống nhau.",
          "answer": true,
          "explain": "Đúng. Các khái niệm lề trang, kiểu chữ, hàm tính toán, biểu đồ ở hai bộ phần mềm đều tương đồng."
        },
        {
          "text": "d) Mã nguồn mở đồng nghĩa với việc phần mềm đó không bao giờ được phép dùng trong bất kỳ cơ quan hay trường học nào.",
          "answer": false,
          "explain": "Sai. Phần mềm nguồn mở được rất nhiều chính phủ, trường học và tập đoàn đa quốc gia lớn ưu tiên sử dụng vì tính độc lập và an toàn."
        }
      ]
    },
    {
      "id": "b3-tf2",
      "context": "Khi tìm hiểu về giấy phép phần mềm công cộng GNU GPL (General Public License), một nhóm học sinh nhận định về các quyền và nghĩa vụ của người sử dụng:",
      "statements": [
        {
          "text": "a) Giấy phép GNU GPL cho phép người dùng tự do sao chép và phân phối phần mềm cho bạn bè mà không bị coi là vi phạm bản quyền.",
          "answer": true,
          "explain": "Đúng. Quyền tự do phân phối lại là một trong 4 quyền tự do cơ bản được định nghĩa bởi FSF."
        },
        {
          "text": "b) Người dùng có quyền xem và sửa đổi mã nguồn của phần mềm được cấp phép theo GNU GPL để phù hợp với nhu cầu của mình.",
          "answer": true,
          "explain": "Đúng. Cung cấp mã nguồn và quyền sửa đổi là điều kiện tiên quyết của GNU GPL."
        },
        {
          "text": "c) Nếu một lập trình viên lấy mã nguồn có giấy phép GNU GPL để tạo ra một phần mềm phái sinh mới, lập trình viên đó có quyền đóng mã nguồn và bán bản quyền độc quyền mà không công khai mã nguồn mới.",
          "answer": false,
          "explain": "Sai. Điều khoản Copyleft của GNU GPL bắt buộc tác phẩm phái sinh khi phân phối cũng phải phát hành mã nguồn theo giấy phép GPL."
        },
        {
          "text": "d) Giấy phép GNU GPL cấm hoàn toàn việc sử dụng phần mềm trên các máy tính cá nhân chạy Windows.",
          "answer": false,
          "explain": "Sai. Giấy phép GPL không giới hạn hệ điều hành; rất nhiều phần mềm GPL (như GIMP, VLC, LibreOffice) chạy tuyệt vời trên Windows."
        }
      ]
    },
    {
      "id": "b3-tf3",
      "context": "Một nhóm bạn học sinh lớp 11 làm bài tập nhóm môn Lịch sử bằng dịch vụ trực tuyến Google Docs trên Internet:",
      "statements": [
        {
          "text": "a) Tất cả các thành viên trong nhóm có thể mở tài liệu cùng một lúc trên trình duyệt web và thấy được các chỉnh sửa của nhau theo thời gian thực.",
          "answer": true,
          "explain": "Đúng. Tính năng cộng tác thời gian thực (Real-time Collaboration) là ưu thế nổi bật của Google Docs."
        },
        {
          "text": "b) Dữ liệu văn bản được tự động lưu lên đám mây máy chủ của Google, người dùng không lo bị mất bài nếu máy tính đột ngột bị mất điện.",
          "answer": true,
          "explain": "Đúng. Mọi thao tác gõ chữ được tự động lưu vào tài khoản đám mây sau vài mili giây."
        },
        {
          "text": "c) Học sinh bắt buộc phải cài đặt một phần mềm nặng hơn 10GB vào máy tính cá nhân thì mới xem được tệp Google Docs.",
          "answer": false,
          "explain": "Sai. Google Docs chạy hoàn toàn trên trình duyệt web (Chrome, Edge...), không cần cài đặt gói phần mềm nặng nào."
        },
        {
          "text": "d) Trưởng nhóm có thể chia sẻ liên kết với quyền 'Chỉ xem' (Viewer) để giáo viên chấm bài mà không sợ người ngoài vào xóa mất nội dung.",
          "answer": true,
          "explain": "Đúng. Cơ chế phân quyền Viewer, Commenter, Editor giúp kiểm soát an toàn dữ liệu."
        }
      ]
    },
    {
      "id": "b3-tf4",
      "context": "So sánh giữa phần mềm chạy cục bộ trên máy tính (Desktop App) và phần mềm chạy trên Internet (Web App / Cloud App):",
      "statements": [
        {
          "text": "a) Phần mềm chạy trên Internet yêu cầu thiết bị phải có kết nối mạng Internet ổn định thì mới sử dụng được trọn vẹn tính năng.",
          "answer": true,
          "explain": "Đúng. Thiếu mạng Internet, người dùng khó hoặc không thể tải giao diện và đồng bộ dữ liệu với máy chủ đám mây."
        },
        {
          "text": "b) Phần mềm cục bộ có thể hoạt động hoàn toàn độc lập và không bị gián đoạn ngay cả khi không có kết nối mạng.",
          "answer": true,
          "explain": "Đúng. Phần mềm cục bộ chạy trực tiếp trên tài nguyên phần cứng máy tính nên không phụ thuộc vào đường truyền ngoài."
        },
        {
          "text": "c) Dữ liệu lưu trên máy chủ đám mây không bao giờ có bất kỳ nguy cơ nào về rò rỉ dữ liệu hay sự cố an ninh mạng.",
          "answer": false,
          "explain": "Sai. Các dịch vụ đám mây luôn là mục tiêu của tin tặc; nếu người dùng đặt mật khẩu yếu hoặc máy chủ bị tấn công thì dữ liệu có thể bị rò rỉ."
        },
        {
          "text": "d) Người dùng phần mềm trên web không phải tự tay tải các bản cập nhật vá lỗi vì việc nâng cấp do nhà cung cấp dịch vụ xử lý trên máy chủ.",
          "answer": true,
          "explain": "Đúng. Đây là lợi thế của SaaS: luôn được sử dụng phiên bản mới nhất mà không tốn công nâng cấp thủ công."
        }
      ]
    }
  ],
  "essay": [
    {
      "id": "b3-es1",
      "q": "Thế nào là phần mềm nguồn mở? Nêu 3 lợi ích cụ thể của việc sử dụng phần mềm nguồn mở đối với học sinh và nhà trường.",
      "answer": "1. Khái niệm: Phần mềm nguồn mở là phần mềm mà mã nguồn được công khai và phát hành kèm theo các giấy phép tự do (như GNU GPL), cho phép người dùng tự do tải về sử dụng, nghiên cứu, sửa đổi và phân phối lại mà không phải trả phí bản quyền thương mại.\n\n2. Ba lợi ích đối với học sinh và nhà trường:\n- Tiết kiệm kinh phí: Nhà trường có thể trang bị phần mềm (hệ điều hành Ubuntu, văn phòng LibreOffice, đồ họa GIMP) cho hàng trăm máy tính hợp pháp mà không tốn hàng trăm triệu đồng tiền bản quyền.\n- An toàn pháp lý và bảo mật: Tránh được việc dùng phần mềm bẻ khóa (crack) vi phạm pháp luật và tiềm ẩn virus độc hại; mã nguồn mở được cộng đồng giám sát nên ít có nguy cơ cài cắm cổng hậu ngầm.\n- Hỗ trợ học tập chuyên sâu: Học sinh đam mê công nghệ có thể tiếp cận, đọc mã nguồn thực tế để hiểu thuật toán và rèn luyện kỹ năng lập trình phần mềm."
    },
    {
      "id": "b3-es2",
      "q": "Trình bày nguyên tắc 'Copyleft' trong giấy phép công cộng GNU GPL. Vì sao nguyên tắc này giúp bảo vệ cộng đồng mã nguồn mở?",
      "answer": "1. Nguyên tắc Copyleft trong GNU GPL: Quy định rằng bất kỳ ai khi sử dụng, sửa đổi hay phát triển phần mềm dựa trên mã nguồn có giấy phép GNU GPL thì khi phân phối sản phẩm mới (tác phẩm phái sinh) đó ra cộng đồng cũng bắt buộc phải công khai toàn bộ mã nguồn theo cùng giấy phép GNU GPL.\n\n2. Ý nghĩa bảo vệ cộng đồng:\n- Ngăn chặn việc 'đóng mã chiếm dụng': Tránh việc các công ty thương mại lấy công sức đóng góp miễn phí của cộng đồng, sửa đổi một chút rồi biến thành tài sản đóng mã độc quyền để trục lợi.\n- Đảm bảo tính kế thừa và phát triển liên tục: Mọi cải tiến, sửa lỗi của cá nhân hay tổ chức đều được đóng góp ngược lại cho cộng đồng, giúp phần mềm ngày càng hoàn thiện và bền vững."
    },
    {
      "id": "b3-es3",
      "q": "So sánh ưu điểm và hạn chế giữa việc lưu trữ dữ liệu trên thiết bị cục bộ (ổ cứng máy tính, USB) và lưu trữ dữ liệu trên đám mây (Google Drive, OneDrive).",
      "answer": "1. Lưu trữ cục bộ (Ổ cứng/USB):\n- Ưu điểm: Tốc độ đọc ghi rất nhanh; truy cập mọi lúc không cần kết nối mạng Internet; toàn quyền kiểm soát thiết bị vật lý.\n- Hạn chế: Dễ mất dữ liệu vĩnh viễn nếu thiết bị bị rơi vỡ, hỏng hóc, ngấm nước, thất lạc hoặc nhiễm virus mã hóa; khó chia sẻ cho nhiều người ở xa.\n\n2. Lưu trữ đám mây (Google Drive/OneDrive):\n- Ưu điểm: Truy cập dữ liệu mọi lúc mọi nơi từ máy tính, điện thoại; dễ dàng phân quyền chia sẻ và cộng tác thời gian thực; có cơ chế sao lưu tự động dự phòng của nhà cung cấp.\n- Hạn chế: Bắt buộc phải có kết nối mạng Internet ổn định; dung lượng miễn phí thường có giới hạn; tiềm ẩn nguy cơ rò rỉ thông tin nếu bị lộ tài khoản hoặc máy chủ bị tấn công."
    },
    {
      "id": "b3-es4",
      "q": "Em hãy phân tích một tình huống học tập thực tế mà việc sử dụng ứng dụng web cộng tác trực tuyến (như Google Docs hoặc Canva) đem lại hiệu quả vượt trội so với phần mềm cài đặt truyền thống.",
      "answer": "1. Tình huống thực tế: Nhóm 4 học sinh lớp 11 cùng chuẩn bị bài báo cáo thuyết trình môn Tin học về đề tài 'Trí tuệ nhân tạo trong đời sống'. Mỗi bạn ở một xã khác nhau và cần hoàn thành bài trong dịp nghỉ cuối tuần.\n\n2. Hiệu quả vượt trội của ứng dụng web trực tuyến:\n- Không cần gặp mặt trực tiếp: 4 bạn cùng mở chung một tệp Google Slides hoặc Canva qua liên kết chia sẻ.\n- Phân công và làm việc song song: Bạn A tìm tư liệu và viết nội dung slide 1-3, bạn B phụ trách thiết kế hình ảnh slide 4-6, bạn C gõ lời bình, bạn nhóm trưởng theo dõi tiến độ tổng thể. Mọi người nhìn thấy con trỏ chuột và thay đổi của nhau tức thời.\n- Trao đổi ngay trên tài liệu: Các bạn dùng tính năng bình luận (Comment) để góp ý trực tiếp trên từng bức ảnh mà không cần gửi tệp đính kèm qua lại, tránh được tình trạng nhầm lẫn các phiên bản (bản_1.pptx, bản_cuoi.pptx)."
    }
  ]
};
