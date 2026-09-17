import { LessonExtra } from "@/lib/types";

// Bài 16: Nghề quản trị cơ sở dữ liệu (Đúng/Sai & Tự luận / Trả lời ngắn)
export const extra: LessonExtra = {
  "tf": [
    {
      "id": "b16-tf1",
      "context": "Bạn Tuấn yêu thích công nghệ và tìm hiểu về ngành nghề Quản trị cơ sở dữ liệu (DBA). Tuấn ghi nhận các thông tin sau về nghề nghiệp này:",
      "statements": [
        {
          "text": "a) Người quản trị CSDL (DBA) chịu trách nhiệm về việc bảo mật, tối ưu hiệu năng và đảm bảo hệ thống dữ liệu hoạt động liên tục 24/7.",
          "answer": true,
          "explain": "Đúng. Đây là sứ mệnh cốt lõi của nghề DBA."
        },
        {
          "text": "b) Nghề DBA chỉ cần biết gõ chữ tiếng Việt trên bàn phím, hoàn toàn không cần học ngôn ngữ truy vấn SQL.",
          "answer": false,
          "explain": "Sai. Nắm vững SQL và kiến trúc DBMS là kỹ năng chuyên môn bắt buộc của DBA."
        },
        {
          "text": "c) Tính cẩn trọng, kỷ luật và đạo đức nghề nghiệp là phẩm chất tối quan trọng của một DBA vì họ nắm giữ toàn bộ thông tin nhạy cảm của tổ chức.",
          "answer": true,
          "explain": "Đúng. Nắm giữ dữ liệu cơ mật đòi hỏi đạo đức nghề nghiệp liêm chính tuyệt đối."
        },
        {
          "text": "d) Nghề DBA hoàn toàn không có nhu cầu tuyển dụng trong các ngân hàng hay bệnh viện lớn.",
          "answer": false,
          "explain": "Sai. Ngân hàng và bệnh viện là những nơi cần tuyển dụng nhiều DBA giỏi nhất với mức đãi ngộ rất cao."
        }
      ]
    },
    {
      "id": "b16-tf2",
      "context": "Về các vị trí việc làm trong lĩnh vực công nghệ dữ liệu:",
      "statements": [
        {
          "text": "a) Chuyên viên phân tích dữ liệu (Data Analyst) tập trung vào việc xử lý, trực quan hóa dữ liệu và trích xuất thông tin phục vụ kinh doanh.",
          "answer": true,
          "explain": "Đúng. Data Analyst trả lời các câu hỏi kinh doanh từ số liệu CSDL."
        },
        {
          "text": "b) Kỹ sư dữ liệu (Data Engineer) phụ trách xây dựng hạ tầng kỹ thuật và các đường ống luân chuyển dữ liệu lớn tự động.",
          "answer": true,
          "explain": "Đúng. Data Engineer lo phần 'hạ tầng đường ống dữ liệu'."
        },
        {
          "text": "c) Mọi chuyên gia quản trị CSDL đều kiêm luôn việc sửa chữa máy in và thay bóng đèn trong văn phòng.",
          "answer": false,
          "explain": "Sai. DBA là vị trí chuyên môn kỹ thuật phần mềm cấp cao, không phải thợ điện dân dụng."
        },
        {
          "text": "d) Trong thời đại Trí tuệ nhân tạo (AI), dữ liệu có cấu trúc sạch và an toàn do DBA quản lý là nguồn 'thức ăn' chất lượng nhất để huấn luyện các mô hình AI.",
          "answer": true,
          "explain": "Đúng. Dữ liệu chuẩn xác là nền tảng sống còn của các hệ thống AI."
        }
      ]
    },
    {
      "id": "b16-tf3",
      "context": "Về quy trình vận hành và xử lý sự cố của DBA:",
      "statements": [
        {
          "text": "a) Khi hệ thống bị quá tải giờ cao điểm, DBA có thể đánh chỉ mục (Index) trên các cột thường xuyên tìm kiếm để tăng tốc độ truy vấn.",
          "answer": true,
          "explain": "Đúng. Chỉ mục index giúp máy tính tìm kiếm theo cây nhị phân nhanh hơn quét toàn bảng."
        },
        {
          "text": "b) DBA được quyền tự ý xóa bỏ các bản sao lưu dự phòng để có chỗ trống cài đặt các trò chơi điện tử lên máy chủ CSDL.",
          "answer": false,
          "explain": "Sai. Hành vi này phá vỡ an toàn dữ liệu và vi phạm nghiêm trọng kỷ luật lao động."
        },
        {
          "text": "c) Kế hoạch ứng phó thảm họa (Disaster Recovery Plan) giúp tổ chức khôi phục hoạt động kinh doanh nhanh nhất khi xảy ra sự cố cháy hỏng máy chủ.",
          "answer": true,
          "explain": "Đúng. Kế hoạch này định rõ quy trình phục hồi từ các bản sao lưu ngoại vi."
        },
        {
          "text": "d) DBA thường xuyên theo dõi tệp nhật ký (Log file) để phát hiện các hành vi đăng nhập bất thường hoặc tấn công mạng.",
          "answer": true,
          "explain": "Đúng. Theo dõi Log là biện pháp giám sát an ninh mạng chủ động."
        }
      ]
    },
    {
      "id": "b16-tf4",
      "context": "Về định hướng học tập và phát triển nghề nghiệp quản trị CSDL:",
      "statements": [
        {
          "text": "a) Học sinh học tốt môn Tin học 11 (phần CSDL và SQL) sẽ có lợi thế rất lớn khi học các ngành Công nghệ thông tin ở bậc đại học.",
          "answer": true,
          "explain": "Đúng. Kiến thức Tin học 11 là nền tảng của môn CSDL ở bậc đại học."
        },
        {
          "text": "b) Tiếng Anh chuyên ngành công nghệ thông tin giúp người làm nghề DBA tiếp cận nhanh chóng các tài liệu kỹ thuật và chứng chỉ quốc tế.",
          "answer": true,
          "explain": "Đúng. Hầu hết tài liệu chuyên sâu và thi chứng chỉ OCP, Azure, AWS đều bằng tiếng Anh."
        },
        {
          "text": "c) Người làm DBA không bao giờ cần phải học thêm kiến thức mới vì công nghệ dữ liệu không bao giờ thay đổi.",
          "answer": false,
          "explain": "Sai. Công nghệ CSDL biến đổi liên tục (Cloud DB, NoSQL, AI Database), đòi hỏi học tập suốt đời."
        },
        {
          "text": "d) Lợi dụng quyền quản trị CSDL để trích xuất và bán số điện thoại khách hàng là hành vi vi phạm pháp luật hình sự.",
          "answer": true,
          "explain": "Đúng. Đây là tội danh vi phạm pháp luật về bảo vệ dữ liệu cá nhân."
        }
      ]
    }
  ],
  "essay": [
    {
      "id": "b16-es1",
      "q": "Trình bày vị trí việc làm, 4 nhiệm vụ trọng tâm và các phẩm chất cần có của một người làm nghề Quản trị cơ sở dữ liệu (DBA).",
      "answer": "1. Vị trí việc làm: Người quản trị cơ sở dữ liệu (DBA) là chuyên gia kỹ thuật phần mềm cao cấp, chịu trách nhiệm quản lý toàn diện về mặt kỹ thuật, đảm bảo hệ thống cơ sở dữ liệu của tổ chức hoạt động ổn định, hiệu quả, an toàn và liên tục 24/7.\n\n2. Bốn nhiệm vụ trọng tâm:\n- Cài đặt, cấu hình và bảo trì máy chủ CSDL: Thiết lập hệ thống DBMS (như MySQL, Oracle, SQL Server), phân bổ tài nguyên bộ nhớ và ổ đĩa tối ưu.\n- Quản lý bảo mật và phân quyền truy cập: Tạo lập tài khoản, cấp phát và thu hồi quyền hạn chi tiết cho người dùng và ứng dụng, bảo vệ dữ liệu khỏi truy cập trái phép.\n- Giám sát và tối ưu hóa hiệu năng: Theo dõi tình trạng hoạt động của máy chủ, phát hiện và tối ưu các câu lệnh SQL chậm thông qua việc đánh chỉ mục (Index) hợp lý, giải quyết xung đột khóa dữ liệu.\n- Sao lưu định kỳ và phục hồi thảm họa: Lên lịch sao lưu tự động (Backup) và chịu trách nhiệm khôi phục (Restore) nguyên vẹn dữ liệu khi xảy ra lỗi phần cứng, mất điện hoặc tấn công mạng.\n\n3. Các phẩm chất cần có:\n- Tính cẩn trọng và tỉ mỉ: Mọi câu lệnh do DBA gõ trực tiếp đều tác động đến hàng triệu bản ghi, sai một dấu phẩy có thể làm sập hệ thống.\n- Đạo đức nghề nghiệp liêm chính: Nắm giữ toàn bộ dữ liệu cơ mật của doanh nghiệp và khách hàng nên phải trung thực, không bao giờ lợi dụng quyền hạn để trục lợi.\n- Khả năng chịu áp lực và giải quyết sự cố: Bình tĩnh phân tích nguyên nhân gốc rễ và đưa ra giải pháp khắc phục nhanh nhất khi hệ thống gặp thảm họa ngừng hoạt động."
    },
    {
      "id": "b16-es2",
      "q": "Phân biệt sự khác nhau về mục tiêu công việc giữa ba vị trí: Người quản trị CSDL (DBA), Kỹ sư dữ liệu (Data Engineer) và Chuyên viên phân tích dữ liệu (Data Analyst).",
      "answer": "Phân biệt 3 vị trí việc làm trong ngành dữ liệu:\n1. Người quản trị CSDL (DBA - Database Administrator):\n- Mục tiêu chính: Tập trung vào 'Sự an toàn, tính ổn định và tính sẵn sàng' của kho dữ liệu.\n- Công việc: Cài đặt, bảo mật, sao lưu dự phòng, tối ưu tốc độ và khắc phục sự cố hệ thống CSDL.\n\n2. Kỹ sư dữ liệu (Data Engineer):\n- Mục tiêu chính: Tập trung vào 'Hạ tầng luân chuyển và tích hợp dữ liệu' quy mô lớn.\n- Công việc: Thiết kế các đường ống dữ liệu tự động (Data Pipelines), thu thập dữ liệu từ nhiều nguồn khác nhau (web, app, cảm biến IoT), làm sạch dữ liệu và chuyển về kho dữ liệu tập trung (Data Warehouse / Data Lake).\n\n3. Chuyên viên phân tích dữ liệu (Data Analyst):\n- Mục tiêu chính: Tập trung vào 'Ý nghĩa kinh doanh và thông tin chiết xuất' từ số liệu.\n- Công việc: Sử dụng SQL và công cụ trực quan hóa (Power BI, Tableau) để phân tích xu hướng mua hàng, hành vi khách hàng, lập các biểu đồ báo cáo giúp ban giám đốc đưa ra các quyết định kinh doanh tối ưu."
    },
    {
      "id": "b16-es3",
      "q": "Một hệ thống cơ sở dữ liệu bán hàng trực tuyến bị sập đúng vào dịp khuyến mãi lớn (Black Friday). Em hãy nêu quy trình 4 bước xử lý khẩn cấp mà một DBA cần thực hiện.",
      "answer": "Quy trình 4 bước xử lý khẩn cấp của DBA:\n- Bước 1: Xác định nguyên nhân gốc rễ (Root Cause Analysis): Kiểm tra ngay các thông số máy chủ (CPU có bị 100% không? Ổ đĩa có bị đầy không? Mạng có bị nghẽn không?), mở tệp Error Log để xem lỗi sập do tràn kết nối (Connection limit), xung đột khóa chết (Deadlock) hay do bị tấn công từ chối dịch vụ.\n- Bước 2: Cô lập sự cố và bảo vệ dữ liệu: Ngăn chặn các luồng giao dịch độc hại hoặc tạm thời chuyển hướng người dùng sang trang chờ (Maintenance page) để tránh dữ liệu bị ghi lấp lửng gây sai lệch số dư/kho hàng.\n- Bước 3: Phục hồi và kích hoạt dự phòng: Nếu máy chủ chính hỏng phần cứng, lập tức kích hoạt chuyển đổi dự phòng (Failover) sang cụm máy chủ phụ (Replica / Standby Server); nếu lỗi do CSDL bị khóa, thực hiện khởi động lại dịch vụ DBMS và phục hồi các giao dịch dở dang từ tệp Transaction Log.\n- Bước 4: Kiểm tra tính toàn vẹn và mở lại dịch vụ: Chạy các truy vấn kiểm tra dữ liệu trọng yếu (bảng đơn hàng, số dư tài khoản) xem có khớp không; khi xác nhận an toàn 100% thì mở lại hệ thống cho khách hàng giao dịch; sau đó viết báo cáo kiểm điểm sự cố và đề xuất nâng cấp cấu hình."
    },
    {
      "id": "b16-es4",
      "q": "Em hãy chia sẻ kế hoạch học tập cá nhân nếu muốn định hướng phát triển trở thành một chuyên gia dữ liệu trong tương lai.",
      "answer": "Kế hoạch học tập cá nhân định hướng nghề dữ liệu:\n1. Giai đoạn THPT:\n- Nắm vững kiến thức môn Tin học 11: Hiểu bản chất mô hình CSDL quan hệ, thành thạo các câu lệnh truy vấn SQL từ cơ bản đến nâng cao; tìm hiểu thêm một ngôn ngữ lập trình kịch bản (như Python).\n- Trau dồi môn Toán: Chú trọng xác suất thống kê, đại số tuyến tính và tư duy logic giải quyết vấn đề.\n- Nâng cao trình độ tiếng Anh: Học thuật ngữ công nghệ thông tin để có thể tự đọc tài liệu hướng dẫn kỹ thuật và theo dõi các khóa học trực tuyến quốc tế.\n\n2. Giai đoạn Đại học:\n- Chọn các ngành đào tạo chuẩn: Khoa học máy tính, Hệ thống thông tin quản lý, Kỹ thuật dữ liệu hoặc Khoa học dữ liệu.\n- Thực hành trên các hệ QTCSDL lớn: Học chuyên sâu về kiến trúc nội bộ của MySQL, PostgreSQL, Oracle, MongoDB.\n- Thi chứng chỉ quốc tế và đi thực tập sớm: Đạt các chứng chỉ nghề nghiệp của Oracle, Microsoft Azure hoặc AWS; tham gia các dự án thực tế tại doanh nghiệp để tích lũy kinh nghiệm xử lý dữ liệu quy mô thực tế."
    }
  ]
};
