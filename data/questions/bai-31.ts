import { Question } from "@/lib/types";

// Bài 31: Thực hành tạo phim hoạt hình
export const questions: Question[] = [
  {
    "id": "b31-01",
    "q": "Giai đoạn đầu tiên và quan trọng nhất quyết định linh hồn, nội dung của một bộ phim hoạt hình ngắn là:",
    "options": [
      "Lên ý tưởng và viết kịch bản chi tiết (Script / Storyboard)",
      "Render xuất file video",
      "Mua bản quyền máy chiếu",
      "Đăng video lên mạng xã hội"
    ],
    "answer": 0,
    "explain": "Kịch bản và cốt truyện là nền tảng cốt lõi định hình nhân vật, lời thoại và thông điệp trước khi bắt tay vào sản xuất đồ họa."
  },
  {
    "id": "b31-02",
    "q": "Kịch bản phân cảnh (Storyboard) trong sản xuất phim hoạt hình là gì?",
    "options": [
      "Tập hợp các hình vẽ phác thảo tuần tự minh họa cho các cảnh quay, góc máy, hành động và lời thoại của nhân vật theo trình tự thời gian",
      "Bản danh sách chấm công của các họa sĩ",
      "Hóa đơn thanh toán tiền điện của xưởng phim",
      "Bản hợp đồng mua bán thiết bị máy tính"
    ],
    "answer": 0,
    "explain": "Storyboard giống như một tập truyện tranh phác thảo mô tả trực quan các khung cảnh chính của bộ phim trước khi dựng."
  },
  {
    "id": "b31-03",
    "q": "Khi sử dụng phần mềm GIMP để thiết kế các bộ phận nhân vật hoạt hình phục vụ việc làm chuyển động, định dạng xuất ảnh tối ưu nhất là:",
    "options": [
      "PNG (.png) với nền trong suốt (Transparent background)",
      "JPEG (.jpg) nền trắng",
      "BMP (.bmp)",
      "GIF tĩnh 16 màu"
    ],
    "answer": 0,
    "explain": "Định dạng PNG bảo tồn kênh trong suốt (Alpha Channel) giúp ghép nối các bộ phận nhân vật vào bối cảnh mà không bị dính khung nền trắng."
  },
  {
    "id": "b31-04",
    "q": "Để tạo cảm giác một chú chim vỗ cánh bay trong phim hoạt hình, người thiết kế đồ họa cần vẽ tối thiểu những trạng thái nào của đôi cánh?",
    "options": [
      "Ít nhất 3 trạng thái: Cánh vỗ lên cao, cánh dang ngang, cánh cụp xuống thấp",
      "Chỉ cần 1 hình vẽ chim đứng yên",
      "Không cần vẽ cánh",
      "Vẽ 100 con chim khác nhau"
    ],
    "answer": 0,
    "explain": "Chu kỳ chuyển động vỗ cánh (Flapping cycle) cần tối thiểu 3 tư thế (Cánh lên, ngang, xuống) lặp tuần hoàn để tạo chuyển động bay mượt mà."
  },
  {
    "id": "b31-05",
    "q": "Kỹ thuật 'Khung hình chính' (Keyframe) trong phần mềm hoạt hình và làm phim có tác dụng gì?",
    "options": [
      "Xác định trạng thái (vị trí, kích thước, độ xoay, độ trong suốt) của đối tượng tại các mốc thời điểm quan trọng, phần mềm sẽ tự động tính toán chuyển động ở giữa",
      "Xóa sạch toàn bộ nhân vật",
      "Chỉ dùng để đổi màu màn hình máy tính",
      "Tự động tăng âm lượng loa"
    ],
    "answer": 0,
    "explain": "Keyframe đánh dấu các điểm mốc trạng thái (ví dụ A ở giây 1, B ở giây 3); phần mềm sẽ tự tạo chuyển động mượt mà giữa A và B."
  },
  {
    "id": "b31-06",
    "q": "Kỹ thuật hoạt hình 'Stop-motion' (hoạt hình tĩnh vật) được tạo ra bằng phương pháp nào?",
    "options": [
      "Chụp liên tục từng bức ảnh của mô hình/đối tượng sau mỗi lần dịch chuyển một chút xíu, rồi ghép chuỗi ảnh đó lại thành video chuyển động",
      "Dùng máy quay phim quay trực tiếp người thật chạy",
      "Vẽ một bức tranh duy nhất rồi phóng to thu nhỏ",
      "Lập trình mã nguồn bằng ngôn ngữ Pascal"
    ],
    "answer": 0,
    "explain": "Stop-motion là nghệ thuật ghép hàng trăm bức ảnh chụp từng cử động nhỏ của mô hình (đất nặn, đồ chơi, hình giấy) thành chuyển động."
  },
  {
    "id": "b31-07",
    "q": "Khái niệm 'Lip-sync' (Đồng bộ khẩu hình miệng) trong sản xuất phim hoạt hình có nghĩa là gì?",
    "options": [
      "Khớp chuyển động đóng mở của khuôn miệng nhân vật sao cho ăn khớp chính xác với âm thanh lời thoại được lồng tiếng",
      "Tô son môi cho nhân vật hoạt hình",
      "Dán băng dính vào miệng nhân vật",
      "Nhân vật chỉ giao tiếp bằng ánh mắt"
    ],
    "answer": 0,
    "explain": "Lip-sync đồng bộ cử động miệng với các nguyên âm, phụ âm của giọng lồng tiếng giúp nhân vật nói chuyện sống động tự nhiên."
  },
  {
    "id": "b31-08",
    "q": "Hiệu ứng âm thanh tiếng động (Sound Effects - SFX) trong phim hoạt hình bao gồm những gì?",
    "options": [
      "Tiếng bước chân lẹp xẹp, tiếng gió rít, tiếng lá rơi, tiếng cánh cửa cót két, tiếng va chạm bộp chát",
      "Toàn bộ lời thoại của diễn viên",
      "Bài hát chủ đề phát ở cuối phim",
      "Tiếng quạt máy tính đang chạy"
    ],
    "answer": 0,
    "explain": "SFX là các âm thanh mô phỏng tiếng động vật lý của hành động và môi trường nhằm tăng cảm giác chân thực cho hoạt cảnh."
  },
  {
    "id": "b31-09",
    "q": "Khi thiết kế bối cảnh nền (Background) cho phim hoạt hình, nguyên tắc màu sắc nào giúp nhân vật luôn nổi bật?",
    "options": [
      "Màu nền nên có độ tương phản hoặc độ bão hòa dịu hơn so với màu sắc tươi sáng, rực rỡ của nhân vật chính",
      "Màu nền phải sặc sỡ và lòe loẹt hơn nhân vật",
      "Nhân vật màu gì thì vẽ nền y hệt màu đó để ngụy trang",
      "Toàn bộ nền phải vẽ màu đen kịt"
    ],
    "answer": 0,
    "explain": "Phông nền cần dịu dàng hơn để làm phông đỡ, tôn vinh nhân vật chính nổi bật ở tiền cảnh."
  },
  {
    "id": "b31-10",
    "q": "Trong quá trình thu âm lồng tiếng (Voice acting) cho nhân vật hoạt hình, điều quan trọng nhất người diễn xuất cần thể hiện là gì?",
    "options": [
      "Giọng điệu truyền cảm, nhấn nhá cảm xúc (vui, buồn, sợ hãi, ngạc nhiên) phù hợp với tính cách và tâm lý nhân vật",
      "Đọc đều đều như trả bài không cảm xúc",
      "Nói thật nhanh như máy móc",
      "Chỉ được thì thầm thật nhỏ"
    ],
    "answer": 0,
    "explain": "Lồng tiếng hoạt hình đòi hỏi biểu cảm cảm xúc phong phú, giàu nhạc điệu để thổi hồn vào nhân vật ảo."
  },
  {
    "id": "b31-11",
    "q": "Tỷ lệ chuẩn giữa thời lượng và số lượng cảnh quay của một bộ phim hoạt hình ngắn học đường (thời lượng 1 đến 3 phút) thường là:",
    "options": [
      "Gồm từ 5 đến 15 phân cảnh ngắn, mạch lạc, tập trung giải quyết một thông điệp ý nghĩa duy nhất",
      "Một cảnh quay duy nhất kéo dài 3 tiếng",
      "Chứa 1000 nhân vật xuất hiện cùng lúc",
      "Không có nhân vật nào xuất hiện"
    ],
    "answer": 0,
    "explain": "Phim ngắn học đường 1-3 phút cần kịch bản cô đọng, súc tích, giải quyết gọn ghẽ thông điệp giáo dục."
  },
  {
    "id": "b31-12",
    "q": "Khi một nhân vật hoạt hình chạy từ bên trái màn hình sang bên phải màn hình, trên Timeline phần mềm dựng phim, người ta sử dụng công cụ gì?",
    "options": [
      "Đặt 2 điểm Keyframe vị trí (Position): điểm đầu ở tọa độ bên trái, điểm sau ở tọa độ bên phải",
      "Dùng cọ vẽ tô màu trắng xóa nhân vật",
      "Xóa nhân vật khỏi thư viện",
      "Tắt âm thanh của máy tính"
    ],
    "answer": 0,
    "explain": "Đặt Keyframe tọa độ Position X ở đầu và cuối clip giúp phần mềm tự động tính toán cho nhân vật di chuyển ngang qua màn hình."
  },
  {
    "id": "b31-13",
    "q": "Quy tắc 'Bóp và Giãn' (Squash and Stretch) - một trong 12 nguyên tắc hoạt hình kinh điển của Disney - có tác dụng gì?",
    "options": [
      "Tạo cảm giác về trọng lượng, lực đàn hồi và tính mềm dẻo của nhân vật khi vận động (ví dụ quả bóng bẹp xuống khi chạm đất rồi giãn dài ra khi nảy lên)",
      "Làm cho hình vẽ biến mất hoàn toàn",
      "Làm giảm dung lượng tệp tin",
      "Làm cho nhân vật bị biến dạng vĩnh viễn"
    ],
    "answer": 0,
    "explain": "Squash & Stretch mang lại tính sinh động, mô tả độ mềm dẻo và năng lượng của chuyển động hoạt hình."
  },
  {
    "id": "b31-14",
    "q": "Để thể hiện một nhân vật đang tiến lại gần người xem từ đằng xa, người dựng hoạt hình thay đổi thuộc tính nào qua Keyframe?",
    "options": [
      "Tăng dần thông số Tỉ lệ kích thước (Scale) từ nhỏ đến lớn",
      "Giảm dần kích thước về số 0",
      "Xoay nhân vật 360 độ liên tục",
      "Đổi màu nhân vật sang màu đen"
    ],
    "answer": 0,
    "explain": "Phóng to kích thước (Scale) kết hợp dịch chuyển tạo cảm giác đối tượng đang tiến lại gần mắt người xem."
  },
  {
    "id": "b31-15",
    "q": "Khi dựng hoạt hình có nhiều nhân vật nói chuyện đối đáp, cách sắp xếp rãnh âm thanh Audio Track tối ưu là:",
    "options": [
      "Mỗi nhân vật được thu âm trên các đoạn clip riêng và xếp đặt đối đáp tuần tự trên các rãnh Audio riêng biệt kèm rãnh nhạc nền BGM độc lập",
      "Gộp toàn bộ tiếng nói và tiếng ồn vào 1 file duy nhất không chỉnh sửa",
      "Tắt hết tiếng nói chỉ để lại tiếng cười",
      "Chỉ cho một nhân vật được nói trong suốt bộ phim"
    ],
    "answer": 0,
    "explain": "Tách riêng track âm thanh cho từng nhân vật và BGM giúp kiểm soát âm lượng độc lập và căn chỉnh thời gian chuẩn xác."
  },
  {
    "id": "b31-16",
    "q": "Khái niệm 'Parallax Scrolling' (Cuộn thị sai) trong bối cảnh phim hoạt hình 2D là gì?",
    "options": [
      "Kỹ thuật di chuyển các lớp phông nền với tốc độ khác nhau: lớp xa (núi, mây) trôi chậm, lớp gần (cây cối, mặt đường) trôi nhanh để tạo cảm giác chiều sâu 3D",
      "Làm cho hình nền bị vỡ vụn",
      "Tự động vẽ thêm các đám mây đen",
      "Chuyển toàn bộ phim thành tranh vẽ chì"
    ],
    "answer": 0,
    "explain": "Parallax Scrolling di chuyển lớp cảnh xa chậm hơn lớp cảnh gần, tạo ảo giác không gian 3D chân thực trên nền 2D."
  },
  {
    "id": "b31-17",
    "q": "Thông điệp của một bộ phim hoạt hình học đường nên hướng tới điều gì?",
    "options": [
      "Các giá trị nhân văn, tình bạn trong sáng, bảo vệ môi trường, văn hóa ứng xử trên không gian mạng hoặc bài học giáo dục đạo đức",
      "Quảng cáo các sản phẩm nước ngọt có gas",
      "Cổ vũ bạo lực học đường",
      "Chia sẻ các mẹo gian lận thi cử"
    ],
    "answer": 0,
    "explain": "Phim hoạt hình học đường cần lan tỏa thông điệp giáo dục tích cực, bồi dưỡng nhân cách và kỹ năng sống cho học sinh."
  },
  {
    "id": "b31-18",
    "q": "Để tạo cảm giác ban đêm cho một cảnh hoạt hình vốn được vẽ vào ban ngày, người biên tập có thể áp dụng hiệu ứng gì?",
    "options": [
      "Phủ một lớp màu xanh lam đậm (Dark Blue) có độ mờ đục bán trong suốt (Opacity 60%) hoặc chỉnh Color Balance thiên về màu lạnh",
      "Tăng độ sáng lên mức tối đa",
      "Đổi toàn bộ màu sắc sang màu vàng chói",
      "Xóa bỏ hoàn toàn lớp bối cảnh"
    ],
    "answer": 0,
    "explain": "Phủ lớp màu xanh thẫm bán trong suốt là thủ thuật kinh điển tạo hiệu ứng ban đêm (Day for Night) trong đồ họa phim."
  },
  {
    "id": "b31-19",
    "q": "Khi xuất bản bộ phim hoạt hình đã hoàn thành, độ phân giải khuyến nghị chuẩn để trình chiếu trong lễ bế mạc hoặc đăng tải lên cổng thông tin trường là:",
    "options": [
      "Full HD (1920x1080 pixel), 30 fps, định dạng MP4 H.264",
      "Độ phân giải 320x240",
      "Định dạng tệp ảnh GIF không tiếng",
      "Định dạng âm thanh MP3"
    ],
    "answer": 0,
    "explain": "Chuẩn Full HD 1080p định dạng MP4 mang lại độ nét sắc sảo, âm thanh trong trẻo trên mọi màn hình chiếu lớn."
  },
  {
    "id": "b31-20",
    "q": "Một nhóm học sinh nhận thấy chuyển động đi bộ của nhân vật trông bị cứng đơ như khúc gỗ. Nguyên nhân chính là do:",
    "options": [
      "Nhân vật chỉ được trượt ngang thân người mà không có các chuyển động phụ trợ như chân co duỗi, tay vung vẩy và nhấp nhô trọng tâm",
      "Do máy tính không có card đồ họa rời",
      "Do màn hình máy tính quá sáng",
      "Do bài hát nền quá nhanh"
    ],
    "answer": 0,
    "explain": "Chuyển động tự nhiên đòi hỏi sự phối hợp nhịp nhàng giữa các khớp: bước chân, tay vung nhịp nhàng và độ nhấp nhô cơ thể."
  },
  {
    "id": "b31-21",
    "q": "Sau khi sản xuất xong phim hoạt hình, bước 'Phản biện và Đánh giá' (Peer Review) trong lớp học mang lại lợi ích gì?",
    "options": [
      "Lắng nghe đóng góp ý kiến từ bạn bè và thầy cô để nhận ra các hạt sạn về nhịp điệu, âm thanh hay cốt truyện, từ đó rút kinh nghiệm hoàn thiện kỹ năng",
      "Để tranh cãi xem ai giỏi hơn",
      "Để xóa bỏ bộ phim",
      "Không mang lại lợi ích nào"
    ],
    "answer": 0,
    "explain": "Đánh giá đồng đẳng giúp học sinh rèn luyện tư duy phản biện, học hỏi điểm mạnh từ các nhóm khác và hoàn thiện tư duy thẩm mỹ."
  },
  {
    "id": "b31-22",
    "q": "Khi làm phim hoạt hình tĩnh vật (Stop-motion) bằng điện thoại, dụng cụ phụ trợ quan trọng nhất để chống rung giật giữa các khung hình là:",
    "options": [
      "Giá đỡ ba chân cố định điện thoại (Tripod)",
      "Một chiếc khăn lau màn hình",
      "Ốp lưng điện thoại nhiều màu",
      "Một chiếc micro không dây"
    ],
    "answer": 0,
    "explain": "Tripod giữ máy cố định tuyệt đối, đảm bảo góc máy không bị xê dịch dù chỉ 1 milimet giữa hàng trăm bức ảnh chụp."
  },
  {
    "id": "b31-23",
    "q": "Tính mạch lạc trong đường dây câu chuyện (Narrative Flow) của phim hoạt hình có nghĩa là gì?",
    "options": [
      "Các sự kiện diễn ra có nguyên nhân - kết quả logic, có phần mở đầu giới thiệu, phần cao trào giải quyết xung đột và phần kết thúc ý nghĩa",
      "Mọi nhân vật đều phải bay lơ lửng trên không trung",
      "Không cần có kịch bản, thích gì làm nấy",
      "Toàn bộ phim chỉ có tiếng nổ đùng đoàng"
    ],
    "answer": 0,
    "explain": "Tính mạch lạc đòi hỏi cấu trúc câu chuyện chặt chẽ (Mở bài - Thân bài - Cao trào - Kết bài) giúp người xem dễ dàng đồng cảm."
  },
  {
    "id": "b31-24",
    "q": "Trong quá trình làm việc nhóm để sản xuất phim hoạt hình học đường, kỹ năng mềm nào sau đây là quan trọng nhất?",
    "options": [
      "Phân công nhiệm vụ rõ ràng (kịch bản, vẽ hình, lồng tiếng, dựng phim), lắng nghe tôn trọng lẫn nhau và tuân thủ thời hạn (deadline)",
      "Mỗi người tự làm một phim riêng không liên quan",
      "Để một bạn làm hết toàn bộ công việc từ đầu đến cuối",
      "Bỏ cuộc khi gặp khó khăn về kỹ thuật"
    ],
    "answer": 0,
    "explain": "Sản xuất phim là công việc tập thể đòi hỏi tinh thần hợp tác, phân công chuyên môn hóa và phối hợp ăn ý theo thời hạn."
  }
];
