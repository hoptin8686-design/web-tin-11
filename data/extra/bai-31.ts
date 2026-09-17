import { LessonExtra } from "@/lib/types";

// Bài 31: Thực hành tạo phim hoạt hình (Đúng/Sai & Tự luận / Trả lời ngắn)
export const extra: LessonExtra = {
  "tf": [
    {
      "id": "b31-tf1",
      "context": "Nhóm bạn An thực hiện dự án cuối kỳ: Sản xuất một bộ phim hoạt hình 2D ngắn dài 2 phút với chủ đề 'Cùng nhau vượt qua kỳ thi'. Nhóm triển khai khâu chuẩn bị tiền kỳ.",
      "statements": [
        {
          "text": "a) An bắt đầu bằng việc thảo luận ý tưởng, xây dựng thông điệp và viết kịch bản phân cảnh (Storyboard) chi tiết từng hành động của nhân vật.",
          "answer": true,
          "explain": "Đúng. Tiền kỳ là khâu nền tảng bắt buộc trước khi bắt tay vào sản xuất hình ảnh."
        },
        {
          "text": "b) An có thể bỏ qua hoàn toàn kịch bản, cứ mở phần mềm lên vẽ và cắt đại một cách ngẫu hứng để phim sáng tạo hơn.",
          "answer": false,
          "explain": "Sai. Làm phim không có kịch bản và phân cảnh sẽ dẫn đến mất phương hướng, thừa thiếu cảnh và lãng phí công sức."
        },
        {
          "text": "c) Các nhân vật (bạn Thỏ, bạn Rùa) được vẽ trên GIMP và xuất thành các tệp ảnh PNG có nền trong suốt để dễ dàng tách ghép cử động.",
          "answer": true,
          "explain": "Đúng. PNG trong suốt là định dạng chuẩn để lắp ghép nhân vật vào các phông nền khác nhau."
        },
        {
          "text": "d) Bối cảnh phòng học và sân trường cần được vẽ bằng màu sắc u ám, lòe loẹt để lấn át hình ảnh của hai nhân vật chính.",
          "answer": false,
          "explain": "Sai. Phông nền phải hài hòa, làm nền tảng tôn vinh hành động của nhân vật chính."
        }
      ]
    },
    {
      "id": "b31-tf2",
      "context": "Nhóm tiến hành dựng hoạt hình và làm chuyển động cho nhân vật trên phần mềm làm phim.",
      "statements": [
        {
          "text": "a) Nhóm sử dụng kỹ thuật Keyframe để tạo chuyển động di chuyển cho bạn Rùa từ cổng trường bước vào cửa lớp học.",
          "answer": true,
          "explain": "Đúng. Keyframe vị trí giúp tạo chuyển động tịnh tiến mượt mà từ điểm A đến điểm B."
        },
        {
          "text": "b) Để tạo bước đi tự nhiên, nhóm thay đổi luân phiên các hình ảnh vẽ chân bước tới, chân thu lại ăn khớp với nhịp di chuyển.",
          "answer": true,
          "explain": "Đúng. Kết hợp chu kỳ bước chân (Walk cycle) với Keyframe tạo chuyển động sống động."
        },
        {
          "text": "c) Khi nhân vật nhảy lên ăn mừng, áp dụng nguyên tắc 'Bóp và Giãn' (Squash & Stretch) giúp nhân vật trông mềm mại, đàn hồi và giàu sức sống.",
          "answer": true,
          "explain": "Đúng. Đây là nguyên tắc hoạt hình kinh điển mang lại sự mềm dẻo cho nhân vật."
        },
        {
          "text": "d) Mọi chuyển động trong phim hoạt hình bắt buộc phải di chuyển với tốc độ đều tăm tắp như chuyển động của một cỗ máy cơ khí.",
          "answer": false,
          "explain": "Sai. Chuyển động sinh học tự nhiên luôn có gia tốc: chậm dần, nhanh dần (Ease in, Ease out) rất linh hoạt."
        }
      ]
    },
    {
      "id": "b31-tf3",
      "context": "Nhóm tiến hành khâu lồng tiếng (Voice acting) và tích hợp hiệu ứng âm thanh cho phim.",
      "statements": [
        {
          "text": "a) Bạn Mai có giọng nói vui tươi được phân công lồng tiếng cho bạn Thỏ, bạn Hùng có giọng trầm ấm lồng tiếng cho bạn Rùa.",
          "answer": true,
          "explain": "Đúng. Phân vai lồng tiếng phù hợp với tính cách và ngoại hình nhân vật."
        },
        {
          "text": "b) Nhóm cần căn chỉnh cử động đóng mở miệng của nhân vật khớp với âm thanh lời thoại (Lip-sync) để tạo cảm giác nhân vật thực sự đang nói chuyện.",
          "answer": true,
          "explain": "Đúng. Đồng bộ khẩu hình Lip-sync là yếu tố quyết định tính chân thực của hoạt hình."
        },
        {
          "text": "c) Thêm các hiệu ứng tiếng động (SFX) như tiếng chuông trường reo 'reng reng', tiếng bước chân lẹp xẹp giúp bộ phim thêm phần sinh động và cuốn hút.",
          "answer": true,
          "explain": "Đúng. Hiệu ứng âm thanh SFX tạo môi trường âm học chân thực cho cảnh phim."
        },
        {
          "text": "d) Nhạc nền nên bật ở mức âm lượng lớn gấp ba lần tiếng nói của nhân vật để người xem không nghe thấy lời thoại.",
          "answer": false,
          "explain": "Sai. Nhạc nền phải nhỏ hơn lời thoại để khán giả tiếp nhận trọn vẹn thông điệp câu chuyện."
        }
      ]
    },
    {
      "id": "b31-tf4",
      "context": "Bộ phim hoàn thành, nhóm xuất bản video và tham gia buổi báo cáo sản phẩm trước cả lớp.",
      "statements": [
        {
          "text": "a) Nhóm xuất phim ra tệp video chuẩn MP4, độ phân giải Full HD 1080p để chiếu trên màn hình TV lớp học có độ nét tối ưu.",
          "answer": true,
          "explain": "Đúng. Chuẩn Full HD MP4 đảm bảo chất lượng hình ảnh và độ tương thích hoàn hảo."
        },
        {
          "text": "b) Bộ phim được đánh giá cao nhờ thông điệp ý nghĩa: Ca ngợi sự kiên trì, tinh thần giúp đỡ lẫn nhau trong học tập thay vì ganh ghét đố kỵ.",
          "answer": true,
          "explain": "Đúng. Giá trị nhân văn và tính giáo dục là tiêu chí hàng đầu của sản phẩm học đường."
        },
        {
          "text": "c) Hoạt động góp ý của thầy cô và các bạn giúp nhóm nhận ra điểm cần cải thiện về nhịp điệu cắt dựng cho các dự án sau.",
          "answer": true,
          "explain": "Đúng. Đánh giá nhận xét giúp phát triển kỹ năng toàn diện."
        },
        {
          "text": "d) Trong sản xuất phim hoạt hình, chỉ có khâu vẽ hình là có giá trị, các khâu kịch bản, âm thanh và cắt dựng đều không đóng góp vai trò gì.",
          "answer": false,
          "explain": "Sai. Hoạt hình là nghệ thuật tổng hợp đòi hỏi sự xuất sắc đồng bộ từ kịch bản, mỹ thuật, diễn xuất âm thanh đến kỹ thuật dựng phim."
        }
      ]
    }
  ],
  "essay": [
    {
      "id": "b31-es1",
      "q": "Trình bày quy trình 4 giai đoạn cơ bản để sản xuất một bộ phim hoạt hình ngắn hoàn chỉnh trong môn Tin học 11.",
      "answer": "Quy trình 4 giai đoạn sản xuất phim hoạt hình:\\n1. Giai đoạn Tiền kỳ (Pre-production): Lên ý tưởng câu chuyện, xác định thông điệp giáo dục, viết kịch bản văn học chi tiết (lời thoại, hành động) và vẽ kịch bản phân cảnh (Storyboard) trực quan hóa từng góc máy và phân cảnh.\\n2. Giai đoạn Sản xuất tài nguyên (Production): Sử dụng phần mềm đồ họa (GIMP) để thiết kế các nhân vật ở nhiều góc nhìn, nhiều tư thế cử động với nền trong suốt (PNG); vẽ các bối cảnh không gian; tiến hành thu âm giọng nói (Voice acting) cho từng nhân vật và sưu tầm tiếng động SFX.\\n3. Giai đoạn Hậu kỳ biên tập (Post-production): Đưa toàn bộ tài nguyên vào phần mềm làm phim; sắp xếp hình ảnh trên dòng thời gian; tạo chuyển động cho nhân vật bằng kỹ thuật Keyframe; đồng bộ khẩu hình miệng (Lip-sync); lồng nhạc nền và hiệu ứng âm thanh; thêm tiêu đề và phụ đề.\\n4. Giai đoạn Xuất bản và Đánh giá (Export & Evaluation): Render xuất video định dạng MP4 Full HD 1080p; trình chiếu thử nghiệm, tiếp nhận phản hồi đóng góp để hoàn thiện sản phẩm."
    },
    {
      "id": "b31-es2",
      "q": "Giải thích khái niệm 'Khung hình chính' (Keyframe) trong phần mềm làm phim và nêu ví dụ ứng dụng cụ thể để tạo chuyển động cho một nhân vật hoạt hình.",
      "answer": "- Khái niệm Keyframe: Khung hình chính (Keyframe) là điểm mốc thời gian đặc biệt trên Timeline nơi người thiết lập cố định các giá trị thuộc tính cụ thể của đối tượng (như vị trí Position, kích thước Scale, góc xoay Rotation, độ trong suốt Opacity). Dựa vào ít nhất 2 Keyframe tại 2 thời điểm khác nhau, phần mềm sẽ tự động tính toán nội suy các giá trị biến thiên ở giữa để tạo ra chuyển động liên tục, mượt mà.\\n- Ví dụ ứng dụng: Tạo chuyển động chiếc xe ô tô đồ chơi chạy từ trái sang phải màn hình trong 3 giây:\\n+ Tại giây 00:00: Đặt Keyframe 1 xác định vị trí của chiếc xe ở mép ngoài cùng bên trái (X = -200px).\\n+ Tại giây 00:03: Đặt Keyframe 2 xác định vị trí của chiếc xe ở mép ngoài cùng bên phải (X = 1920px).\\n+ Kết quả: Phần mềm sẽ tự động cho chiếc xe lăn bánh lướt ngang qua màn hình từ trái sang phải một cách êm ái trong đúng 3 giây."
    },
    {
      "id": "b31-es3",
      "q": "Tại sao khâu Thu âm lồng tiếng (Voice acting) và Hiệu ứng âm thanh (Sound Effects) lại đóng vai trò sống còn đối với sự thành công của một bộ phim hoạt hình?",
      "answer": "- Thổi hồn và cảm xúc cho nhân vật ảo: Nhân vật hoạt hình vốn chỉ là các nét vẽ đồ họa tĩnh vô tri; chính chất giọng, ngữ điệu, tiếng cười, tiếng thở dài của người lồng tiếng sẽ biến chúng thành những thực thể sống động, có tính cách, có số phận và truyền tải cảm xúc chân thành đến trái tim khán giả.\\n- Tăng cường tính chân thực và kịch tính: Hiệu ứng âm thanh tiếng động (SFX) mô phỏng chính xác các tương tác vật lý (tiếng bước chân, tiếng gió hú, tiếng đập cửa, tiếng rơi vỡ) giúp đánh lừa thính giác, khiến không gian hoạt hình 2D trở nên có chiều sâu và chân thực như đời thực.\\n- Dẫn dắt tâm lý người xem: Sự phối hợp nhịp nhàng giữa lời thoại, tiếng động và nhạc nền giúp định hướng cảm xúc khán giả (hồi hộp, xúc động, phấn khích), đồng thời giữ cho nhịp phim luôn lôi cuốn, không bị tẻ nhạt."
    },
    {
      "id": "b31-es4",
      "q": "Nêu 4 tiêu chí cốt lõi để đánh giá chất lượng của một sản phẩm phim hoạt hình ngắn do học sinh thực hiện.",
      "answer": "Bốn tiêu chí cốt lõi đánh giá phim hoạt hình:\\n1. Nội dung và thông điệp giáo dục: Cốt truyện mạch lạc, có mở đầu, cao trào và kết thúc hợp lý; truyền tải được bài học đạo đức, nhân văn sâu sắc, giàu tính giáo dục và phù hợp với lứa tuổi học đường.\\n2. Tính thẩm mỹ và chuyển động của đồ họa: Nhân vật và bối cảnh được thiết kế hài hòa, đường nét rõ ràng, phối màu thẩm mỹ; các cử động của nhân vật (đi lại, cử động tay chân, đổi hướng) tương đối mượt mà, tự nhiên, không bị cứng nhắc cơ học.\\n3. Chất lượng âm thanh và sự đồng bộ: Giọng lồng tiếng rõ ràng, truyền cảm; khẩu hình miệng ăn khớp tương đối với lời thoại (Lip-sync); tiếng động môi trường phong phú; nhạc nền phù hợp với diễn biến và được cân bằng âm lượng hài hòa không lấn át lời nói.\\n4. Kỹ thuật biên tập và hoàn thiện sản phẩm: Video được cắt dựng nhịp nhàng, có tiêu đề mở đầu và lời kết Credits chỉn chu; xuất đúng chuẩn kỹ thuật (MP4 Full HD 1080p), hình ảnh sắc nét và không gặp lỗi kỹ thuật gián đoạn."
    }
  ]
};
