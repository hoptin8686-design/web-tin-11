import { LessonExtra } from "@/lib/types";

// Bài 29: Khám phá phần mềm làm phim (Đúng/Sai & Tự luận / Trả lời ngắn)
export const extra: LessonExtra = {
  "tf": [
    {
      "id": "b29-tf1",
      "context": "Nhóm bạn Nam thực hành dựng một video phóng sự học đường bằng phần mềm dựng phim. Nam tìm hiểu cấu trúc không gian làm việc của phần mềm.",
      "statements": [
        {
          "text": "a) Dòng thời gian (Timeline) là nơi thể hiện trình tự thời gian diễn biến của toàn bộ video từ đầu đến cuối.",
          "answer": true,
          "explain": "Đúng. Đây là thành phần quan trọng nhất của mọi phần mềm biên tập video."
        },
        {
          "text": "b) Nam có thể đặt các video clip phỏng vấn ở Video Track 1 và nhạc nền không lời ở Audio Track 1 một cách độc lập.",
          "answer": true,
          "explain": "Đúng. Video và Audio được bố trí ở các dải rãnh riêng biệt để dễ dàng kiểm soát."
        },
        {
          "text": "c) Màn hình Preview cho phép Nam theo dõi hình ảnh tại đúng thời điểm mà đầu đọc Playhead đang dừng lại.",
          "answer": true,
          "explain": "Đúng. Màn hình Preview đồng bộ thời gian thực với vị trí của con trỏ Playhead."
        },
        {
          "text": "d) Khay Media Bin sẽ tự động xóa các video clip trên máy tính của Nam ngay khi Nam kéo chúng xuống Timeline.",
          "answer": false,
          "explain": "Sai. Media Bin chỉ lưu trữ danh sách tham chiếu, hoàn toàn không xóa dữ liệu gốc của người dùng."
        }
      ]
    },
    {
      "id": "b29-tf2",
      "context": "Sau khi dựng xong một nửa kịch bản, Nam lưu tệp dự án mang tên `phong_su_11A.project` rồi gửi tệp này qua Zalo cho bạn Hoa ở nhà dựng tiếp.",
      "statements": [
        {
          "text": "a) Hoa mở tệp dự án trên máy tính của mình và có thể xem ngay video hoàn chỉnh mà không cần Nam gửi thêm các video clip gốc.",
          "answer": false,
          "explain": "Sai. Tệp dự án chỉ chứa đường dẫn liên kết; nếu không gửi kèm các video tư liệu gốc thì máy Hoa sẽ báo lỗi Media Offline."
        },
        {
          "text": "b) Hiện tượng 'Media Offline' xảy ra khi phần mềm không tìm thấy tệp video nguồn theo đúng đường dẫn thư mục đã khai báo.",
          "answer": true,
          "explain": "Đúng. Đó là nguyên lý hoạt động của các phần mềm làm phim phi tuyến tính (NLE)."
        },
        {
          "text": "c) Để Hoa có thể tiếp tục dựng, Nam cần chép toàn bộ thư mục chứa cả tệp dự án lẫn tất cả video, ảnh, nhạc gốc sang USB gửi cho Hoa.",
          "answer": true,
          "explain": "Đúng. Đóng gói đầy đủ tài nguyên dự án (Project archiving) là yêu cầu bắt buộc khi chuyển giao."
        },
        {
          "text": "d) Tệp dự án phim luôn có dung lượng rất lớn (thường từ vài Gigabyte đến hàng chục Gigabyte).",
          "answer": false,
          "explain": "Sai. Tệp dự án chỉ chứa văn bản kịch bản XML/JSON chỉ dẫn cắt ghép nên dung lượng rất nhẹ (chỉ vài chục KB đến vài MB)."
        }
      ]
    },
    {
      "id": "b29-tf3",
      "context": "Xét các thông số kỹ thuật về độ phân giải, tỉ lệ khung hình và tốc độ khung hình (FPS) trong sản xuất video.",
      "statements": [
        {
          "text": "a) Tỉ lệ khung hình 16:9 với độ phân giải Full HD 1920x1080 là định dạng chuẩn phù hợp nhất để chiếu trên màn hình máy tính và tivi.",
          "answer": true,
          "explain": "Đúng. Đây là chuẩn hiển thị ngang tiêu chuẩn quốc tế."
        },
        {
          "text": "b) Để tạo video đăng lên TikTok hoặc YouTube Shorts, nhóm nên chọn tỉ lệ khung hình dọc 9:16.",
          "answer": true,
          "explain": "Đúng. 9:16 tối ưu cho trải nghiệm xem video dọc trên smartphone."
        },
        {
          "text": "c) Tốc độ khung hình 60 fps tạo ra chuyển động giật khựng hơn so với 24 fps.",
          "answer": false,
          "explain": "Sai. 60 fps hiển thị gấp 2.5 lần số khung hình mỗi giây nên chuyển động mượt mà và trơn tru hơn 24 fps rất nhiều."
        },
        {
          "text": "d) Độ phân giải 4K chứa số lượng điểm ảnh nhiều gấp 4 lần so với độ phân giải Full HD (1080p).",
          "answer": true,
          "explain": "Đúng. (3840x2160) = 4 x (1920x1080)."
        }
      ]
    },
    {
      "id": "b29-tf4",
      "context": "Đánh giá các chức năng quản lý và điều phối trên các rãnh Track của Timeline.",
      "statements": [
        {
          "text": "a) Khi hai đoạn video đặt đè lên nhau ở hai Video Track, hình ảnh ở Video Track nằm phía trên sẽ che lấp hình ảnh ở Video Track nằm phía dưới.",
          "answer": true,
          "explain": "Đúng. Rãnh ở tầng cao hơn có độ ưu tiên hiển thị che phủ lên các rãnh thấp hơn."
        },
        {
          "text": "b) Nút Mute (chiếc loa gạch chéo) ở đầu Audio Track giúp tắt tạm thời âm thanh của toàn bộ rãnh đó.",
          "answer": true,
          "explain": "Đúng. Giúp biên tập viên kiểm tra riêng từng kênh âm thanh độc lập."
        },
        {
          "text": "c) Tính năng khóa rãnh (Lock Track) cho phép xóa nhanh tất cả các clip trên rãnh đó chỉ với 1 cú nhấp chuột.",
          "answer": false,
          "explain": "Sai. Khóa rãnh là để bảo vệ clip, ngăn chặn mọi hành vi chỉnh sửa hoặc xóa nhầm."
        },
        {
          "text": "d) Dạng sóng âm (Waveform) trên rãnh âm thanh hỗ trợ người dựng phim nhận biết điểm bắt đầu câu nói để cắt ghép chính xác.",
          "answer": true,
          "explain": "Đúng. Sóng âm cung cấp tín hiệu thị giác về biên độ âm thanh theo thời gian."
        }
      ]
    }
  ],
  "essay": [
    {
      "id": "b29-es1",
      "q": "Trình bày 4 thành phần cơ bản trong giao diện làm việc của một phần mềm làm phim và nêu vai trò của từng thành phần.",
      "answer": "Bốn thành phần giao diện cơ bản:\\n1. Khay chứa tư liệu (Media Bin / Project Files): Nơi nhập (import), quản lý và tổ chức các tệp tư liệu gốc (video clip, hình ảnh tĩnh, âm thanh, nhạc nền) trước khi đưa vào biên tập.\\n2. Màn hình xem trước (Preview Monitor / Canvas): Khung hiển thị video trực quan tại vị trí dừng của đầu đọc thời gian (Playhead), cung cấp các nút điều khiển (Play, Pause, Step) để kiểm tra chất lượng hình ảnh và hiệu ứng.\\n3. Dòng thời gian (Timeline): Trục không gian - thời gian biểu diễn toàn bộ tiến trình của bộ phim, nơi người dựng thực hiện các thao tác cắt tỉa, sắp xếp thứ tự các phân cảnh và lồng ghép âm thanh.\\n4. Các rãnh biên tập (Tracks): Nằm trên Timeline, chia thành Video Tracks (xếp chồng các lớp hình ảnh, văn bản, hiệu ứng) và Audio Tracks (quản lý nhạc nền, lời bình, tiếng động môi trường)."
    },
    {
      "id": "b29-es2",
      "q": "Giải thích bản chất của 'Tệp dự án phim' (Project file) và nguyên nhân dẫn đến hiện tượng 'Media Offline'. Nêu giải pháp khắc phục khi chia sẻ dự án cho người khác.",
      "answer": "- Bản chất: Tệp dự án phim chỉ là một tệp kịch bản chỉ dẫn chứa các thông số kỹ thuật (đường dẫn liên kết tới tệp gốc, điểm cắt in/out, vị trí trên Timeline, các bộ lọc hiệu ứng) chứ KHÔNG chứa trực tiếp các tệp video và âm thanh gốc nặng hàng Gigabyte bên trong nó.\\n- Nguyên nhân 'Media Offline': Xảy ra khi phần mềm không thể tìm thấy tệp tư liệu theo đúng đường dẫn đã lưu (do tệp gốc bị xóa, đổi tên, hoặc chuyển sang thư mục/ổ đĩa khác).\\n- Giải pháp khắc phục: Gom toàn bộ tệp dự án cùng tất cả các tệp hình ảnh, video, nhạc nền liên quan vào trong cùng một thư mục chung có cấu trúc gọn gàng trước khi nén (.zip) hoặc chép sang ổ cứng ngoài gửi cho người khác."
    },
    {
      "id": "b29-es3",
      "q": "So sánh sự khác nhau giữa tỉ lệ khung hình 16:9 và 9:16. Nêu ngữ cảnh ứng dụng thực tế phù hợp nhất của từng loại tỉ lệ.",
      "answer": "- Tỉ lệ 16:9 (Video ngang):\\n+ Đặc điểm: Chiều rộng lớn hơn chiều cao theo tỉ lệ 16 đơn vị ngang và 9 đơn vị dọc (độ phân giải phổ biến: 1920x1080 Full HD, 3840x2160 4K).\\n+ Ứng dụng: Chuẩn mực cho phim điện ảnh, truyền hình, màn hình máy chiếu, video ngang trên YouTube, phù hợp với tầm nhìn ngang tự nhiên của mắt người và các thiết bị hiển thị nằm ngang.\\n- Tỉ lệ 9:16 (Video dọc):\\n+ Đặc điểm: Chiều cao lớn hơn chiều rộng theo tỉ lệ đảo ngược (độ phân giải phổ biến: 1080x1920 pixel).\\n+ Ứng dụng: Tối ưu hoàn hảo cho các nền tảng video ngắn trên điện thoại di động cầm thẳng đứng như TikTok, YouTube Shorts, Facebook/Instagram Reels, giúp tận dụng tối đa 100% diện tích màn hình smartphone của người dùng."
    },
    {
      "id": "b29-es4",
      "q": "Nêu ý nghĩa của thông số Tốc độ khung hình (FPS) trong sản xuất video. Tại sao khi muốn tạo cảnh quay chuyển động chậm (Slow Motion) chất lượng cao, người ta cần quay video với tốc độ 60 fps hoặc 120 fps?",
      "answer": "- Ý nghĩa của FPS (Frames Per Second): Là số lượng khung hình tĩnh được camera chụp lại và hiển thị trên màn hình trong khoảng thời gian một giây. Chỉ số FPS càng cao thì chuỗi chuyển động của đối tượng càng mượt mà, chân thực và mắt người cảm nhận độ sắc nét càng rõ rệt.\\n- Lý do quay 60fps/120fps cho Slow Motion: Khi muốn làm chậm video lại 2 lần (50% tốc độ) hoặc 4 lần (25% tốc độ):\\n+ Nếu video gốc chỉ có 24fps hoặc 30fps, khi làm chậm tốc độ hiển thị sẽ tụt xuống chỉ còn 12fps hoặc 6fps/giây, khiến mắt người nhìn thấy video bị giật khựng, đứt đoạn từng khung hình rất khó chịu.\\n+ Nếu quay ở 60fps hoặc 120fps, khi làm chậm tốc độ lại từ 2 đến 4 lần, số khung hình hiển thị trên giây vẫn duy trì đạt mức 24fps đến 30fps (ngưỡng chuyển động mượt mà của mắt), giúp cảnh quay chuyển động chậm đạt độ trôi chảy, mềm mại và vô cùng ấn tượng."
    }
  ]
};
