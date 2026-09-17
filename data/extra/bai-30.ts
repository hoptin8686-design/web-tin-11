import { LessonExtra } from "@/lib/types";

// Bài 30: Biên tập phim (Đúng/Sai & Tự luận / Trả lời ngắn)
export const extra: LessonExtra = {
  "tf": [
    {
      "id": "b30-tf1",
      "context": "Nhóm bạn Lan biên tập một video ngắn giới thiệu Câu lạc bộ Tiếng Anh của trường. Nhóm tiến hành lọc và cắt ghép các clip đã quay.",
      "statements": [
        {
          "text": "a) Lan dùng công cụ Split (phím S) để cắt bỏ đoạn mở đầu bị rung máy và đoạn cuối khi người phỏng vấn nói vấp.",
          "answer": true,
          "explain": "Đúng. Công cụ Split kết hợp xóa đoạn thừa là thao tác cắt tỉa cơ bản."
        },
        {
          "text": "b) Thao tác Ripple Delete giúp Lan xóa đoạn phỏng vấn hỏng ở giữa và tự động co đoạn sau nối liền vào đoạn trước mà không để lại khe đen.",
          "answer": true,
          "explain": "Đúng. Đây là công dụng tuyệt vời của Ripple Delete."
        },
        {
          "text": "c) Lan nên chèn từ 20 đến 30 loại hiệu ứng chuyển cảnh 3D lấp lánh khác nhau trong vòng 1 phút để video trông chuyên nghiệp hơn.",
          "answer": false,
          "explain": "Sai. Lạm dụng chuyển cảnh lòe loẹt làm video trở nên nghiệp dư, rối mắt và mất tập trung nội dung."
        },
        {
          "text": "d) Hiệu ứng chuyển cảnh hòa tan (Cross Dissolve) rất thích hợp để nối các cảnh hoạt động ngoại khóa nối tiếp nhau nhẹ nhàng.",
          "answer": true,
          "explain": "Đúng. Dissolve mang lại sự chuyển tiếp êm dịu, tự nhiên nhất."
        }
      ]
    },
    {
      "id": "b30-tf2",
      "context": "Lan thực hiện lồng nhạc nền và xử lý âm thanh cho video của câu lạc bộ.",
      "statements": [
        {
          "text": "a) Lan nên chọn nhạc nền không lời với âm lượng vừa phải để không lấn át tiếng phát biểu của thầy cô và các bạn.",
          "answer": true,
          "explain": "Đúng. Nhạc nền (BGM) phải đóng vai trò hỗ trợ, tôn vinh giọng nói chính."
        },
        {
          "text": "b) Áp dụng hiệu ứng Fade Out ở cuối bài nhạc giúp âm thanh nhỏ dần dần êm dịu trước khi video kết thúc.",
          "answer": true,
          "explain": "Đúng. Fade Out giúp âm thanh kết thúc mượt mà không bị cụt lủn."
        },
        {
          "text": "c) Tính năng Audio Ducking tự động dìm nhỏ nhạc nền mỗi khi có người phát biểu và tự nâng nhạc to lên ở các đoạn không có lời thoại.",
          "answer": true,
          "explain": "Đúng. Đây là tính năng tự động hóa chuyên nghiệp trong xử lý âm thanh phim."
        },
        {
          "text": "d) Nhạc nền tải tự do trên mạng xã hội có thể dùng thoải mái mà không cần quan tâm đến vấn đề vi phạm bản quyền tác giả.",
          "answer": false,
          "explain": "Sai. Dùng nhạc có bản quyền không xin phép sẽ bị mạng xã hội tắt tiếng hoặc xóa video."
        }
      ]
    },
    {
      "id": "b30-tf3",
      "context": "Nhóm thiết kế tiêu đề, phụ đề và các yếu tố đồ họa hỗ trợ cho video.",
      "statements": [
        {
          "text": "a) Đồ họa Lower Third được đặt ở góc dưới màn hình để giới thiệu tên và chức vụ của Chủ nhiệm câu lạc bộ.",
          "answer": true,
          "explain": "Đúng. Đó là vị trí và mục đích chuẩn mực của đồ họa Lower Third."
        },
        {
          "text": "b) Phụ đề lời thoại (Subtitles) nên sử dụng font chữ chân phương, màu trắng viền đen để hiển thị rõ nét trên cả cảnh sáng và cảnh tối.",
          "answer": true,
          "explain": "Đúng. Viền đen giúp chữ trắng nổi bật trên mọi hậu cảnh tương phản."
        },
        {
          "text": "c) Phần chữ cảm ơn cuối phim (Credits) giúp tri ân các thầy cô hướng dẫn và các bạn đã tham gia ghi hình.",
          "answer": true,
          "explain": "Đúng. Credits thể hiện sự tôn trọng bản quyền và tinh thần làm việc nhóm."
        },
        {
          "text": "d) Phụ đề video càng đặt ở vị trí cao che kín mặt nhân vật đang nói thì người xem càng dễ đọc.",
          "answer": false,
          "explain": "Sai. Phụ đề bắt buộc đặt sát đáy màn hình để không che khuất diễn xuất khuôn mặt nhân vật."
        }
      ]
    },
    {
      "id": "b30-tf4",
      "context": "Đánh giá quá trình xuất bản (Render) và kiểm tra chất lượng sản phẩm video cuối cùng.",
      "statements": [
        {
          "text": "a) Quá trình xuất video (Export) sẽ gộp toàn bộ các rãnh Video, Audio và hiệu ứng thành một tệp tin duy nhất định dạng MP4.",
          "answer": true,
          "explain": "Đúng. Đó là chức năng render của phần mềm dựng phim."
        },
        {
          "text": "b) Khi xuất video, chỉ số Bitrate càng thấp thì hình ảnh xuất ra càng sắc nét và tệp càng nặng.",
          "answer": false,
          "explain": "Sai. Bitrate thấp làm giảm chất lượng hình ảnh, Bitrate cao mới cho hình ảnh sắc nét."
        },
        {
          "text": "c) Tùy chọn 'Match Source' giúp video xuất ra kế thừa độ phân giải và tỉ lệ khung hình chuẩn từ các cảnh quay gốc.",
          "answer": true,
          "explain": "Đúng. Match Source đảm bảo sự đồng bộ kỹ thuật với nguồn vào."
        },
        {
          "text": "d) Trước khi nộp bài cho giáo viên, nhóm cần mở xem lại toàn bộ video để kiểm tra lỗi chính tả và mức âm lượng.",
          "answer": true,
          "explain": "Đúng. Đây là khâu kiểm định chất lượng (Quality Control) bắt buộc."
        }
      ]
    }
  ],
  "essay": [
    {
      "id": "b30-es1",
      "q": "Nêu sự khác biệt cơ bản giữa thao tác cắt tỉa (Trim) và chia cắt (Split) một đoạn video clip trên dòng thời gian Timeline.",
      "answer": "- Cắt tỉa (Trim):\\n+ Khái niệm: Là thao tác nhấp và kéo rê hai đầu mút của clip (điểm bắt đầu - In point hoặc điểm kết thúc - Out point) trên Timeline để thu ngắn hoặc kéo dài phạm vi hiển thị của đoạn video.\\n+ Ứng dụng: Dùng để loại bỏ các giây thừa ở đầu clip (lúc bấm máy chuẩn bị) và đuôi clip (lúc hô dừng máy) mà không làm đứt đoạn clip thành nhiều phần.\\n- Chia cắt (Split / Cut):\\n+ Khái niệm: Là thao tác dùng công cụ dao cắt hoặc phím tắt (như phím S) để xẻ đôi một đoạn video clip thành 2 clip độc lập riêng biệt tại đúng vị trí của đầu đọc thời gian Playhead.\\n+ Ứng dụng: Dùng khi cần khoanh vùng và xóa một đoạn lỗi ở chính giữa clip (như lúc người nói vấp, ho hoặc có người vô tình đi qua ống kính), hoặc để chèn một hiệu ứng đặc biệt / cảnh quay B-roll vào giữa hai phân đoạn."
    },
    {
      "id": "b30-es2",
      "q": "Trình bày vai trò của hiệu ứng chuyển cảnh (Transitions) trong biên tập phim. Nêu 3 nguyên tắc mỹ thuật cần tuân thủ khi sử dụng hiệu ứng chuyển cảnh.",
      "answer": "- Vai trò của hiệu ứng chuyển cảnh: Giúp kết nối mềm mại, chuyển tiếp mạch lạc và tạo sự liên kết tự nhiên giữa hai cảnh quay khác nhau về góc máy, thời gian hoặc địa điểm; đồng thời truyền tải nhịp điệu cảm xúc và ý đồ nghệ thuật của đạo diễn đến người xem.\\n- Ba nguyên tắc mỹ thuật cần tuân thủ:\\n1. Sử dụng có chọn lọc và đúng mục đích: Không lạm dụng chuyển cảnh liên tục; chỉ sử dụng khi thực sự cần chuyển đổi không gian, thời gian hoặc bước ngoặt nội dung.\\n2. Thời lượng vừa phải và tinh tế: Thời gian chuyển cảnh nên ngắn (khoảng từ 0.5 đến 1 giây), tránh kéo dài lê thê làm gián đoạn nhịp phim.\\n3. Nhất quán về phong cách: Ưu tiên các chuyển cảnh cơ bản, mượt mà như Dissolve hoặc Cut trực tiếp; tránh sử dụng tràn lan các hiệu ứng 3D lòe loẹt (lật trang sách, xoay tròn, lốc xoáy) gây phân tâm và tạo cảm giác nghiệp dư."
    },
    {
      "id": "b30-es3",
      "q": "Giải thích nguyên lý và tầm quan trọng của tính năng 'Audio Ducking' trong xử lý âm thanh phim phóng sự học đường.",
      "answer": "- Nguyên lý: Audio Ducking là cơ chế tự động hóa cân bằng âm thanh. Khi kích hoạt, phần mềm sẽ liên tục giám sát kênh âm thanh lời thoại (Voice/Dialogue). Mỗi khi có tiếng nói xuất hiện, hệ thống sẽ tự động hạ thấp âm lượng của rãnh nhạc nền (Background Music) xuống một mức vừa đủ; và khi lời thoại kết thúc, âm lượng nhạc nền sẽ tự động phục hồi dần lên mức bình thường.\\n- Tầm quan trọng:\\n+ Giúp khán giả nghe rõ mồn một từng từ trong lời phát biểu hoặc thuyết minh của nhân vật mà không bị tiếng nhạc nền lấn át hoặc gây khó chịu.\\n+ Duy trì cảm xúc và không khí sôi nổi liên tục cho video trong các khoảng trống giữa các câu nói, tạo sự hòa quyện âm thanh chuyên nghiệp như trên truyền hình."
    },
    {
      "id": "b30-es4",
      "q": "Nêu 4 tiêu chí cần kiểm tra kỹ lưỡng trong bước Kiểm định chất lượng (Quality Control) trước khi xuất bản và nộp một video thành phẩm.",
      "answer": "Bốn tiêu chí kiểm định chất lượng:\\n1. Tính liền mạch của hình ảnh: Kiểm tra toàn bộ Timeline không bị hở các khe trống màu đen (Black gaps), không có cảnh quay nào bị nhòe mờ, mất nét hoặc lỗi giật hình (Jump cut) thô ráp.\\n2. Độ chuẩn xác của văn bản và đồ họa: Rà soát từng khung hình phụ đề (Subtitles), tiêu đề mở đầu và tên nhân vật (Lower Third) để đảm bảo tuyệt đối không có lỗi chính tả, font chữ hiển thị rõ ràng, không bị tràn ra ngoài mép màn hình.\\n3. Chất lượng âm thanh: Đảm bảo âm lượng thoại rõ ràng, không bị rè méo tiếng (không vượt ngưỡng 0 dB vạch đỏ); nhạc nền hòa quyện êm ái, có Fade In/Fade Out ở hai đầu, không bị ngắt cụt đột ngột.\\n4. Thông số kỹ thuật xuất bản (Export Settings): Xác nhận tệp video được render đúng chuẩn định dạng (MP4 H.264), đúng độ phân giải (Full HD 1080p), tỉ lệ khung hình (16:9 hoặc 9:16) và dung lượng tệp tối ưu để chia sẻ mượt mà."
    }
  ]
};
