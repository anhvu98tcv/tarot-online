const TAROT_CARDS = [
  {
    id: "fool", number: 0, numeral: "0",
    nameVi: "Kẻ Khờ", nameTraditional: "The Fool",
    keywords: ["khởi đầu mới", "tự do", "ngây thơ", "mạo hiểm"],
    general: {
      upright: "Trước mặt bạn là một con đường chưa có dấu chân ai, và đó chính là lý do nó đáng để bước vào. Kẻ Khờ không mang theo bản đồ, không mang theo nỗi sợ — chỉ có một túi hành lý nhẹ và lòng tin ngây thơ rằng cuộc đời sẽ đỡ lấy mình nếu chẳng may trượt chân. Lá bài này nhắc bạn rằng có những hành trình chỉ thật sự bắt đầu khi ta ngừng tính toán và cho phép mình ngạc nhiên. Hãy bước đi, dù chưa biết hết mọi điều — sự ngây thơ ấy chính là nguồn sức mạnh, không phải điểm yếu.",
      reversed: "Sự hào hứng ban đầu có thể đang che mất những rủi ro mà lẽ ra bạn nên nhìn thấy từ sớm. Kẻ Khờ ở chiều ngược là lời nhắc rằng tự do không có nghĩa là buông trôi không tính toán — một vài quyết định gần đây có thể đang được đưa ra quá vội vàng, thiếu một khoảng dừng cần thiết để cân nhắc. Trước khi sải thêm một bước nữa, hãy tự hỏi liệu mình đang dũng cảm hay chỉ đơn giản là chưa chịu nhìn thẳng vào điều đáng lo. Một chút chuẩn bị sẽ không làm mất đi sự tự do mà bạn đang tìm kiếm."
    },
    topics: {
      love: { upright: "Có một sự nhẹ nhõm, hồn nhiên đang len vào chuyện tình cảm của bạn, như thể trái tim vừa được phép thở sau một thời gian dài thận trọng. Một mối quan hệ mới có thể bắt đầu từ một khoảnh khắc rất đời thường, hoặc một tình cảm cũ bước vào giai đoạn tươi mới, ít ràng buộc hơn. Đừng vội gán cho nó những kỳ vọng nặng nề — hãy để nó tự nhiên nở ra theo cách của riêng nó.", reversed: "Bạn có thể đang lao vào một cảm xúc mà chưa kịp hỏi nó thật sự dẫn đến đâu, hoặc đang né tránh một cam kết bằng cách giữ mọi thứ thật nhẹ, thật mơ hồ. Sự ngại ràng buộc đôi khi là bản năng tự bảo vệ, nhưng nếu kéo dài quá lâu, nó cũng có thể khiến người ở bên bạn cảm thấy chông chênh. Hãy thành thật với chính mình về điều bạn đang thật sự muốn." },
      career: { upright: "Một cánh cửa nghề nghiệp hoàn toàn mới có thể đang mở ra — một vai trò, một lĩnh vực, hay một cách làm việc mà bạn chưa từng thử qua. Bạn không cần phải là chuyên gia ngay từ ngày đầu; sự háo hức học hỏi và tinh thần sẵn sàng sai-rồi-sửa chính là tài sản lớn nhất lúc này. Hãy cho phép mình là người mới, và đón nhận điều đó như một lợi thế.", reversed: "Có thể bạn đang nhận việc, nhận lời mời hay thay đổi hướng đi mà chưa thật sự tìm hiểu kỹ những gì đang chờ đợi phía trước. Sự thiếu chuẩn bị, một bản kế hoạch còn sơ sài, hoặc việc bỏ qua những chi tiết nhỏ có thể khiến công việc rẽ sang hướng không mong muốn. Dành thêm một chút thời gian để chuẩn bị sẽ giúp bước nhảy này an toàn hơn." },
      money: { upright: "Một cơ hội tài chính bất ngờ, một nguồn thu nhập chưa từng nghĩ tới, hay một cách tiếp cận hoàn toàn mới với tiền bạc có thể đang xuất hiện trước mắt bạn. Đây không phải lúc để sợ hãi trước những con số xa lạ, mà là lúc để tò mò và cho mình cơ hội học một kỹ năng tài chính mới.", reversed: "Chi tiêu theo cảm xúc, đầu tư theo phong trào hay những quyết định tiền bạc đưa ra trong một khoảnh khắc bốc đồng có thể đang âm thầm tạo lỗ hổng cho ví của bạn. Trước khi xuống tiền cho điều gì lớn, hãy cho mình một đêm để suy nghĩ lại." },
      health: { upright: "Cơ thể bạn đang sẵn sàng cho một khởi đầu mới — có thể là một thói quen vận động, một cách ăn uống, hay đơn giản là một nhịp sống tươi mới hơn. Năng lượng đang dồi dào, tinh thần đang cởi mở; đây là thời điểm thuận lợi để bắt đầu thứ gì đó mà trước đây bạn cứ chần chừ.", reversed: "Sự bất cẩn với sức khỏe của chính mình — bỏ qua một dấu hiệu nhỏ, thức quá khuya nhiều đêm liền, hay thử một phương pháp mới mà chưa tìm hiểu kỹ — có thể đang để lại hậu quả âm thầm. Hãy chậm lại và lắng nghe cơ thể mình nhiều hơn một chút." },
      study: { upright: "Một môn học mới, một lĩnh vực kiến thức lạ lẫm, hay một cách tiếp cận học tập khác hẳn những gì bạn từng quen có thể đang vẫy gọi. Đừng để nỗi sợ \"mình chưa biết gì\" cản bước — chính sự tò mò ngây thơ ấy sẽ giúp bạn tiếp thu nhanh và nhẹ nhàng hơn bạn nghĩ.", reversed: "Học hành thiếu kế hoạch, ôn bài qua loa vào giờ chót, hay sự chủ quan rằng \"chuyện nhỏ, để sau cũng được\" có thể đang khiến kết quả không như mong đợi. Một chút kỷ luật ngay từ bây giờ sẽ giúp bạn đỡ phải hối hận về sau." },
      general: { upright: "Hôm nay là một ngày đẹp để nói \"có\" với điều gì đó bạn chưa từng thử. Năng lượng của Kẻ Khờ mang đến sự nhẹ nhõm, cởi mở và một chút liều lĩnh đáng yêu — hãy để bản thân được ngạc nhiên bởi chính những lựa chọn của mình.", reversed: "Hãy cẩn trọng hơn một chút với những quyết định bốc đồng hôm nay — không phải để dập tắt sự tự do của bạn, mà để bảo vệ nó. Một phút dừng lại trước khi hành động có thể giúp bạn tránh được một rắc rối không cần thiết." }
    },
    icon: "fool"
  },
  {
    id: "magician", number: 1, numeral: "I",
    nameVi: "Pháp Sư", nameTraditional: "The Magician",
    keywords: ["sáng tạo", "hành động", "ý chí", "kỹ năng"],
    general: {
      upright: "Mọi công cụ bạn cần đều đã nằm sẵn trong tay — chỉ còn thiếu hành động để biến ý tưởng thành thứ có thể chạm vào được. Pháp Sư đứng giữa đất và trời, một tay hướng lên nguồn cảm hứng, một tay chỉ xuống thực tế, nhắc bạn rằng sáng tạo chỉ có giá trị khi được nối liền với hành động cụ thể. Đây là lúc để ngừng chờ đợi điều kiện hoàn hảo và bắt đầu, ngay cả khi chỉ với những gì bạn đang có.",
      reversed: "Tài năng và năng lực của bạn vẫn còn đó, nhưng có thể đang bị dùng sai cách — để thao túng một tình huống, để gây ấn tượng giả tạo, hay để trốn tránh trách nhiệm thật của mình. Cũng có thể bạn đang tự hoài nghi khả năng của mình đến mức không dám dùng nó. Hãy nhìn lại động cơ phía sau hành động của bạn trước khi tiếp tục."
    },
    topics: {
      love: { upright: "Bạn đang ở vị trí chủ động — đủ tự tin để ngỏ lời, đủ rõ ràng để định hình mối quan hệ theo hướng mình mong muốn. Đây là thời điểm tốt để biến một tình cảm còn mơ hồ thành điều gì đó cụ thể, rõ ràng hơn bằng chính lời nói và hành động của bạn.", reversed: "Có thể một trong hai người đang nói những lời hay nhưng không đi cùng hành động thật, hoặc đang dùng sự khéo léo của mình để che giấu điều gì đó. Lời ngọt ngào không thay được sự chân thành — hãy nhìn vào những gì đang thực sự diễn ra, không chỉ những gì được nói ra." },
      career: { upright: "Đây là thời điểm vàng để đề xuất ý tưởng, trình bày dự án, hoặc nhận một vai trò đòi hỏi sự chủ động dẫn dắt. Kỹ năng và sự tự tin của bạn đang ở trạng thái tốt nhất — đừng ngồi chờ được giao việc, hãy là người tạo ra cơ hội.", reversed: "Sự tự tin có thể đang trở thành tự phụ, hoặc bạn đang cố tạo ấn tượng bằng những gì mình chưa thật sự làm được. Một dự án có thể đang thiếu nền tảng thực chất phía sau vẻ ngoài hào nhoáng — hãy kiểm tra lại trước khi tiến xa hơn." },
      money: { upright: "Sự sáng tạo và chủ động của bạn có thể biến thành một nguồn thu nhập cụ thể nếu bạn chịu bắt tay vào thử. Đây là lúc để biến một ý tưởng kiếm tiền vẫn còn nằm trên giấy thành một bước hành động đầu tiên, dù nhỏ.", reversed: "Cẩn thận với những lời mời đầu tư nghe có vẻ quá dễ dàng, hay những chiêu trò tài chính thiếu minh bạch đang được gói trong vẻ ngoài hấp dẫn. Nếu một điều gì đó có vẻ tốt đến mức khó tin, rất có thể nó đúng là như vậy." },
      health: { upright: "Bạn có đủ ý chí, kiến thức và nguồn lực để chủ động thay đổi một điều gì đó cho sức khỏe của mình ngay từ hôm nay. Đừng đợi \"thời điểm thích hợp\" — thời điểm thích hợp chính là lúc bạn quyết định bắt đầu.", reversed: "Cố gắng làm quá nhiều thứ cùng lúc, hoặc áp dụng một phương pháp chưa được kiểm chứng kỹ chỉ vì nó đang được nhiều người nhắc tới, có thể khiến cơ thể bạn phải trả giá. Chậm lại và chọn lọc kỹ hơn." },
      study: { upright: "Kiến thức và kỹ năng bạn đã tích lũy đang ở trạng thái sẵn sàng để được vận dụng — đây là thời điểm tốt để áp dụng lý thuyết vào bài tập thực tế hoặc kỳ thi sắp tới. Hãy tin vào những gì bạn đã chuẩn bị.", reversed: "Sự tự tin thái quá có thể khiến bạn xem nhẹ một lỗi nhỏ, một phần kiến thức tưởng như đã nắm chắc nhưng thực ra còn lỏng. Một lần kiểm tra lại cẩn thận sẽ tốt hơn một lần chủ quan." },
      general: { upright: "Hôm nay bạn có đủ năng lực để chủ động tạo ra điều mình mong muốn — chỉ cần bạn chịu hành động thay vì chỉ nghĩ về nó. Một ý tưởng nhỏ, nếu được bắt đầu ngay hôm nay, có thể đi xa hơn bạn tưởng.", reversed: "Hãy xem lại liệu mình có đang dùng năng lực của mình đúng hướng, hay đang cố tạo ra một hình ảnh không thật về bản thân. Sự chân thực luôn bền hơn sự khéo léo." }
    },
    icon: "magician"
  },
  {
    id: "priestess", number: 2, numeral: "II",
    nameVi: "Nữ Tư Tế", nameTraditional: "The High Priestess",
    keywords: ["trực giác", "bí ẩn", "tiềm thức", "tĩnh lặng"],
    general: {
      upright: "Không phải mọi câu trả lời đều cần được tìm ở bên ngoài. Nữ Tư Tế ngồi giữa hai cột trụ sáng và tối, giữ một cuốn sách bí ẩn chỉ hé lộ một phần, nhắc bạn rằng có những điều chỉ có thể được hiểu bằng trực giác, bằng sự tĩnh lặng, không phải bằng phân tích logic thông thường. Hãy cho phép mình ngồi yên một chút, lắng nghe phần sâu nhất bên trong, trước khi tìm lời khuyên từ bất kỳ ai khác.",
      reversed: "Bạn có thể đang xa rời trực giác của chính mình, để tiếng ồn bên ngoài lấn át tiếng nói nhỏ bên trong. Cũng có thể có một điều gì đó đang bị giữ kín, mơ hồ, chưa đủ rõ ràng để bạn nắm bắt — và sự nóng vội muốn biết ngay có thể không giúp được gì."
    },
    topics: {
      love: { upright: "Trước khi đưa ra bất kỳ quyết định nào về tình cảm, hãy dành một khoảng lặng để hỏi lại cảm xúc thật của chính mình, không phải cảm xúc mà bạn nghĩ mình nên có. Trực giác của bạn đang rất nhạy — hãy tin vào nó hơn là vào những lời khuyên từ người ngoài.", reversed: "Có những điều chưa được nói ra giữa hai người — không hẳn là dối trá, nhưng là sự im lặng kéo dài đang tạo khoảng cách. Nếu cảm thấy có gì không ổn mà chưa rõ là gì, đừng vội phớt lờ cảm giác đó." },
      career: { upright: "Trong một quyết định công việc, cảm nhận trực giác của bạn về con người và tình huống có thể chính xác hơn những con số hay lý lẽ được trình bày trên giấy. Hãy cho linh cảm của mình một chỗ ngồi tại bàn ra quyết định.", reversed: "Có thể bạn đang quá vội vàng, quá bận với những việc trước mắt mà bỏ lỡ một dấu hiệu quan trọng đang âm thầm xuất hiện. Một khoảng dừng ngắn để quan sát kỹ hơn sẽ đáng giá hơn việc lao đi nhanh." },
      money: { upright: "Một quyết định tài chính lúc này nên được cân nhắc không chỉ bằng các số liệu hiển nhiên, mà còn bằng cảm nhận sâu hơn về việc liệu nó có thật sự phù hợp với bạn. Nếu một con số đẹp nhưng cảm giác bên trong vẫn còn gợn, hãy tin vào cảm giác đó.", reversed: "Đừng bỏ qua cảm giác bất an dai dẳng về một khoản chi tiêu, một món đầu tư hay một lời mời hợp tác — đôi khi trực giác đang cố cảnh báo bạn điều mà lý trí chưa kịp nhìn ra." },
      health: { upright: "Cơ thể bạn đang gửi đi những tín hiệu rất tinh tế — một sự mệt mỏi khác lạ, một cảm giác bất thường nhỏ — hãy chú ý lắng nghe nó thay vì gạt đi vì nghĩ \"chắc không sao\". Sự tĩnh tâm cũng là một cách chữa lành.", reversed: "Bạn có thể đang phớt lờ một dấu hiệu của cơ thể hoặc tâm lý vì quá bận, hoặc vì không muốn đối mặt với điều nó đang ngầm báo. Hãy cho mình thời gian để dừng lại và lắng nghe thật kỹ." },
      study: { upright: "Sự tĩnh tâm và khả năng tự suy ngẫm sẽ giúp bạn hiểu một vấn đề ở tầng sâu hơn là chỉ học vẹt để đối phó. Đôi khi cách học hiệu quả nhất là ngồi một mình, yên tĩnh, và để kiến thức tự sắp xếp lại trong đầu.", reversed: "Tâm trí xao động, nhiều suy nghĩ chen lấn cùng lúc có thể khiến bạn khó tiếp thu hoặc ghi nhớ điều đang học. Hãy tìm một không gian yên tĩnh hơn trước khi ngồi vào bàn học." },
      general: { upright: "Một ngày phù hợp để tĩnh lại, quan sát nhiều hơn là hành động, lắng nghe nhiều hơn là nói. Những câu trả lời quan trọng nhất hôm nay có thể đến từ sự im lặng, không phải từ những lời khuyên ồn ào bên ngoài.", reversed: "Đừng để những suy nghĩ rối loạn, lo lắng vụn vặt che mờ trực giác vốn rất nhạy của bạn hôm nay. Một vài phút hít thở chậm có thể giúp bạn nhìn rõ lại mọi thứ." }
    },
    icon: "priestess"
  },
  {
    id: "empress", number: 3, numeral: "III",
    nameVi: "Hoàng Hậu", nameTraditional: "The Empress",
    keywords: ["sung túc", "nuôi dưỡng", "sáng tạo", "thiên nhiên"],
    general: {
      upright: "Hoàng Hậu ngồi giữa một khu vườn trù phú, không cần vội vã, vì sự sung túc không đến từ gắng sức mà từ khả năng nuôi dưỡng bền bỉ theo thời gian. Đây là giai đoạn mọi thứ bạn đã chăm bón — một dự án, một mối quan hệ, một phần của chính mình — đang bắt đầu trổ hoa. Hãy cho phép mình tận hưởng sự ấm áp này, và tiếp tục nuôi dưỡng nó bằng sự dịu dàng, không phải áp lực.",
      reversed: "Có một sự mất cân bằng đang diễn ra — có thể bạn đang cho đi quá nhiều mà quên chăm sóc lại chính mình, hoặc đang phụ thuộc vào sự công nhận từ người khác để cảm thấy mình có giá trị. Sự sung túc thật sự bắt đầu từ việc bạn đối xử tốt với bản thân trước tiên."
    },
    topics: {
      love: { upright: "Tình cảm lúc này mang một sự ấm áp gần như hữu hình — những cử chỉ quan tâm nhỏ, sự chăm sóc chân thành, cảm giác được nâng đỡ. Đây là giai đoạn đẹp để vun đắp một mối quan hệ bằng sự dịu dàng và kiên nhẫn, không cần những điều to tát.", reversed: "Một bên có thể đang cho đi nhiều hơn những gì nhận lại, dần cảm thấy cạn kiệt mà không nói ra. Tình yêu cần được trao đi từ một nơi đầy, không phải từ một nơi đang rỗng — hãy chăm sóc lại chính mình trước khi tiếp tục chăm sóc người khác." },
      career: { upright: "Sự kiên nhẫn, óc sáng tạo và khả năng chăm chút từng chi tiết của bạn đang giúp công việc phát triển một cách tự nhiên, bền vững — giống như một khu vườn được tưới đều mỗi ngày thay vì dội nước một lần. Đừng vội thấy kết quả chưa đến ngay đã nản lòng.", reversed: "Bạn có thể đang xao nhãng một dự án quan trọng vì dồn quá nhiều năng lượng cho những việc khác, hoặc cảm thấy cạn kiệt cảm hứng sáng tạo. Hãy dành lại một chút sự chăm sóc cho chính công việc của mình." },
      money: { upright: "Tài chính của bạn đang ở trạng thái sung túc, dư dả — đây là thời điểm tốt để tận hưởng thành quả mình đã gây dựng, hoặc đầu tư vào điều gì đó mang lại giá trị lâu dài cho cuộc sống. Sự sung túc này xứng đáng được đón nhận, không cần cảm thấy có lỗi.", reversed: "Chi tiêu quá tay cho người khác, hoặc thiếu một kế hoạch rõ ràng cho riêng mình, có thể đang âm thầm làm mỏng đi sự ổn định tài chính bạn từng có. Hãy nhớ rằng chăm sóc tài chính cho bản thân cũng là một hình thức yêu thương mình." },
      health: { upright: "Cơ thể bạn đang tràn đầy sức sống — đây là thời điểm lý tưởng để chăm sóc bản thân nhiều hơn, ăn uống đủ đầy, nghỉ ngơi đúng cách và cho phép mình được nuông chiều một chút. Sức khỏe tốt nhất thường đến từ sự dịu dàng, không phải khắc nghiệt.", reversed: "Bạn có thể đang dồn hết sự quan tâm cho người khác mà quên mất chính cơ thể mình đang cần được nghỉ ngơi, được ăn uống đều đặn, được lắng nghe. Hãy đặt mình lên đầu danh sách ưu tiên, ít nhất là trong hôm nay." },
      study: { upright: "Khả năng tiếp thu của bạn đang rất tốt, đặc biệt với những môn học cần sự kiên trì, tỉ mỉ và một chút cảm xúc — như viết, nghệ thuật hay những đề tài cần thời gian để \"ngấm\". Hãy học theo nhịp của riêng mình, không cần vội.", reversed: "Sự trì trệ hoặc thiếu động lực có thể đang khiến việc học chậm lại, giống như một khu vườn không được chăm bón sẽ dần cạn sức sống. Một chút quan tâm trở lại, dù nhỏ, cũng có thể khởi động lại mọi thứ." },
      general: { upright: "Một ngày tràn đầy năng lượng nuôi dưỡng — thích hợp để chăm sóc bản thân, nấu một bữa ăn ngon, dành thời gian cho người thân, hoặc đơn giản là cho phép mình được nghỉ ngơi trong sự ấm áp.", reversed: "Đừng quên dành thời gian cho chính mình giữa những bận rộn hôm nay — sự sung túc thật sự không đến từ việc làm hài lòng tất cả mọi người." }
    },
    icon: "empress"
  },
  {
    id: "emperor", number: 4, numeral: "IV",
    nameVi: "Hoàng Đế", nameTraditional: "The Emperor",
    keywords: ["kỷ luật", "ổn định", "quyền lực", "cấu trúc"],
    general: {
      upright: "Hoàng Đế ngồi vững trên ngai đá, không phải vì không biết sợ, mà vì đã học được cách xây một nền tảng đủ chắc để không còn phải sợ. Sự ổn định bạn đang có — trong công việc, trong cuộc sống, trong chính con người mình — không phải ngẫu nhiên mà có, nó là kết quả của những quy tắc bạn đã kiên trì giữ vững. Đây là lúc để tiếp tục củng cố cấu trúc đó, từng phần một, và tin vào khả năng kiểm soát tình huống của chính mình.",
      reversed: "Sự kiểm soát, khi đi quá xa, có thể biến thành một chiếc lồng — cho chính bạn và cho những người quanh bạn. Có thể bạn đang cố giữ mọi thứ trong khuôn khổ đến mức không còn chỗ cho sự linh hoạt cần thiết, hoặc đang dùng quyền lực của mình theo cách khiến người khác cảm thấy ngột ngạt. Một hệ thống tốt vẫn cần có khoảng thở."
    },
    topics: {
      love: { upright: "Mối quan hệ của bạn lúc này mang một cảm giác an toàn, có cấu trúc rõ ràng — bạn biết mình đang ở đâu, và đối phương cũng vậy. Sự ổn định này là một dạng tình yêu, dù không lãng mạn ồn ào, nhưng vững chắc và đáng tin.", reversed: "Sự kiểm soát hoặc áp đặt quá mức — về thời gian, về cách đối phương sống, về những quyết định nhỏ nhặt — có thể đang khiến người ấy cảm thấy ngột ngạt hơn là được bảo vệ. Tình yêu cần một khung sườn, nhưng không cần một bức tường." },
      career: { upright: "Khả năng lãnh đạo, tổ chức và nhìn xa của bạn đang được phát huy đúng lúc — công việc đang dần đi vào quy củ nhờ chính sự kỷ luật bạn đặt ra. Đây là thời điểm tốt để xây dựng quy trình, đặt nền tảng cho những kế hoạch dài hơi hơn.", reversed: "Sự cứng nhắc trong cách quản lý, hoặc việc bám chặt vào một cách làm cũ chỉ vì nó từng hiệu quả, có thể đang cản trở sự linh hoạt mà tình huống hiện tại cần. Đôi khi lãnh đạo tốt nhất là biết khi nào nên buông quy tắc." },
      money: { upright: "Tài chính của bạn đang được quản lý chặt chẽ, có kế hoạch rõ ràng theo từng bước — đây chính là nền tảng giúp bạn an tâm về lâu dài. Sự kiên trì với kế hoạch ấy, dù đôi lúc nhàm chán, sẽ là thứ mang lại kết quả.", reversed: "Sự thận trọng thái quá, hoặc một ngân sách quá cứng nhắc, có thể đang khiến bạn bỏ lỡ một cơ hội tốt vì không cho phép mình linh hoạt một chút. Kỷ luật tài chính vẫn cần có chỗ cho sự uyển chuyển." },
      health: { upright: "Một lối sống có kỷ luật — giờ ngủ ổn định, bữa ăn đều đặn, lịch tập rõ ràng — đang giúp sức khỏe của bạn vững vàng hơn theo từng ngày. Sự đều đặn, không phải sự gắng sức đột ngột, mới là điều tạo nên thay đổi lâu dài.", reversed: "Áp lực tự đặt ra cho bản thân — phải hoàn hảo, phải kiểm soát mọi thứ, phải đúng kế hoạch — có thể đang vô tình trở thành gánh nặng cho chính cơ thể và tinh thần bạn. Đôi khi nghỉ một buổi tập không phải là thất bại." },
      study: { upright: "Một lịch học có kế hoạch, được chia nhỏ thành từng mục tiêu rõ ràng, sẽ giúp bạn đi đường dài mà không đuối sức. Kỷ luật đều đặn mỗi ngày luôn thắng sự bùng nổ một lần rồi tắt.", reversed: "Việc tự áp đặt một khuôn khổ học tập quá cứng nhắc, không có chỗ cho sự mệt mỏi hay cảm xúc, có thể khiến việc học trở nên căng thẳng và kém hiệu quả hơn bạn nghĩ. Một chút mềm mại với chính mình sẽ giúp việc học bền hơn." },
      general: { upright: "Hôm nay phù hợp để thiết lập kỷ luật và một kế hoạch rõ ràng cho những việc quan trọng — một danh sách, một khung giờ, một quy tắc nhỏ cho riêng mình. Cấu trúc, khi được dựng đúng cách, sẽ mang lại tự do, không phải gò bó.", reversed: "Hãy linh hoạt hơn một chút, đừng quá cứng nhắc với chính mình hôm nay — không phải mọi việc đều cần đi đúng kế hoạch để có giá trị." }
    },
    icon: "emperor"
  },
  {
    id: "hierophant", number: 5, numeral: "V",
    nameVi: "Giáo Hoàng", nameTraditional: "The Hierophant",
    keywords: ["truyền thống", "quy tắc", "niềm tin", "cố vấn"],
    general: {
      upright: "Giáo Hoàng đứng giữa hai môn đồ, một tay chỉ lên trời, mang theo những giá trị đã được kiểm chứng qua nhiều thế hệ trước bạn. Không phải mọi câu trả lời cần được tìm lại từ đầu — đôi khi sự khôn ngoan của người đi trước, một quy tắc đã được thử nghiệm, hay một cố vấn đáng tin cậy chính là con đường ngắn nhất. Hãy cho phép mình học hỏi từ những gì đã được xây dựng, trước khi quyết định đi con đường riêng.",
      reversed: "Bạn có thể đang cảm thấy bó buộc bởi những quy tắc, kỳ vọng hay truyền thống không còn phù hợp với con người bạn đang trở thành. Việc đặt câu hỏi với những gì được cho là \"đúng\" không phải là nổi loạn vô cớ — đó có thể là bước đầu để bạn tìm ra con đường thật sự của riêng mình."
    },
    topics: {
      love: { upright: "Một mối quan hệ được xây dựng trên giá trị chung, sự cam kết rõ ràng và những chuẩn mực cả hai cùng đồng thuận sẽ tạo nền tảng vững chắc cho lâu dài. Đôi khi tình yêu bền nhất không phải tình yêu nồng nhiệt nhất, mà là tình yêu cùng hướng về một hệ giá trị.", reversed: "Bạn hoặc đối phương có thể đang cảm thấy ngột ngạt bởi những khuôn mẫu cũ về việc một mối quan hệ \"nên\" như thế nào — theo kỳ vọng gia đình, xã hội, hay chính những gì bạn từng tin trước đây. Hãy tự hỏi liệu khuôn mẫu đó còn phù hợp với hai người hiện tại không." },
      career: { upright: "Lời khuyên từ một người đi trước, một quy trình đã được kiểm chứng, hoặc việc tuân theo một hệ thống có sẵn sẽ giúp công việc của bạn đi đúng hướng và tránh được những sai lầm không cần thiết. Đừng ngại tìm một người cố vấn lúc này.", reversed: "Một quy trình cứng nhắc, một cách làm việc theo lối mòn chỉ vì \"trước nay vẫn vậy\", có thể đang cản trở những ý tưởng đổi mới mà công việc của bạn đang cần. Hãy mạnh dạn đặt câu hỏi với những điều đã thành thông lệ." },
      money: { upright: "Những nguyên tắc tài chính truyền thống, an toàn — tiết kiệm trước khi chi tiêu, tránh nợ không cần thiết — sẽ mang lại cho bạn sự ổn định trong giai đoạn này hơn là chạy theo các xu hướng đầu tư mới lạ.", reversed: "Đừng quá phụ thuộc vào những lời khuyên tài chính cũ, từ người khác hoặc từ chính bạn trong quá khứ, nếu nó không còn phù hợp với hoàn cảnh hiện tại. Mỗi giai đoạn cuộc sống có thể cần một cách tiếp cận tiền bạc khác nhau." },
      health: { upright: "Những phương pháp chăm sóc sức khỏe đã được kiểm chứng qua thời gian — không phải mẹo mới lạ trên mạng — sẽ phù hợp và an toàn hơn với bạn ở giai đoạn này. Đôi khi lời khuyên của một chuyên gia đáng tin còn quý hơn cả ngàn bài viết tự đọc được.", reversed: "Một phương pháp từng hiệu quả với bạn có thể không còn phù hợp với cơ thể bạn lúc này — hãy cân nhắc tìm một hướng đi mới, hoặc một ý kiến chuyên môn khác, thay vì cố bám lấy điều cũ." },
      study: { upright: "Học theo một phương pháp có hệ thống, theo sự hướng dẫn của thầy cô hoặc một lộ trình đã được kiểm chứng sẽ giúp bạn tiếp thu vững chắc hơn là tự mò mẫm một mình. Đừng ngại dựa vào kinh nghiệm của người đã đi trước.", reversed: "Đừng ngại đặt câu hỏi, phản biện hoặc tìm một cách học khác nếu phương pháp truyền thống không còn hiệu quả với riêng bạn — không phải cách học nào cũng phù hợp với tất cả mọi người." },
      general: { upright: "Hôm nay là ngày tốt để tìm đến lời khuyên từ người có kinh nghiệm, hoặc giữ vững những giá trị cốt lõi mà bạn tin tưởng từ lâu, ngay cả khi xung quanh có nhiều ý kiến khác.", reversed: "Đừng để những khuôn mẫu cũ, những điều \"nên làm\" theo số đông ngăn bạn thử một cách tiếp cận mới hôm nay — đôi khi con đường riêng mới là con đường đúng." }
    },
    icon: "hierophant"
  },
  {
    id: "lovers", number: 6, numeral: "VI",
    nameVi: "Tình Nhân", nameTraditional: "The Lovers",
    keywords: ["kết nối", "lựa chọn", "hài hòa", "tình yêu"],
    general: {
      upright: "Hai con người đứng trần trụi, không phòng vệ, nhìn thẳng vào nhau trong sự tin tưởng tuyệt đối — đó là hình ảnh của một kết nối thật sự, nơi không cần phải diễn hay che giấu điều gì. Lá bài này nói về một sự hài hòa sâu sắc, hoặc một lựa chọn quan trọng mà bạn cần đưa ra dựa trên giá trị thật của mình, không phải dựa trên điều người khác mong đợi. Hãy để trái tim và lý trí cùng đồng thuận trước khi bước tiếp.",
      reversed: "Sự mất cân bằng trong một mối quan hệ — khi một người cho đi nhiều hơn, hoặc hai người đang nhìn về hai hướng khác nhau — có thể đang khiến bạn cảm thấy cô đơn ngay cả khi không ở một mình. Một lựa chọn khó khăn giữa hai con đường cũng có thể đang khiến tâm trí bạn giằng co không yên."
    },
    topics: {
      love: { upright: "Một kết nối sâu sắc, chân thành đang hiện diện — nơi cả hai cảm thấy được nhìn thấy, được thấu hiểu đúng như con người thật của mình, không cần phải diễn vai nào khác. Đây là tình yêu của sự hài hòa và tôn trọng lẫn nhau.", reversed: "Sự mất kết nối, những hiểu lầm chưa được nói thẳng, hoặc một lựa chọn khó khăn giữa việc tiếp tục hay dừng lại đang khiến bạn phân tâm. Hãy cho mình thời gian để lắng nghe điều trái tim thật sự muốn, không phải điều dễ dàng hơn." },
      career: { upright: "Sự hợp tác ăn ý với đồng nghiệp hoặc đối tác, dựa trên sự tôn trọng và mục tiêu chung, sẽ mang lại kết quả tốt hơn bất kỳ nỗ lực đơn độc nào lúc này. Hai cái đầu cùng hướng về một phía luôn mạnh hơn một.", reversed: "Mâu thuẫn quan điểm, sự thiếu ăn ý trong nhóm, hoặc một quyết định khó giữa hai lựa chọn nghề nghiệp có thể đang khiến bạn cảm thấy bị kéo về hai phía. Hãy trao đổi thẳng thắn hơn để tìm ra điểm chung." },
      money: { upright: "Một quyết định tài chính chung — hợp tác kinh doanh, chia sẻ chi phí, hay lập kế hoạch tiền bạc cùng người bạn đời — sẽ diễn ra thuận lợi nếu cả hai dựa trên sự tin tưởng và minh bạch thật sự.", reversed: "Bất đồng về tiền bạc với người khác, dù là đối tác hay người thân, có thể cần được trao đổi thẳng thắn hơn trước khi nó trở thành một vết rạn khó hàn gắn." },
      health: { upright: "Sự hài hòa giữa thể chất và tinh thần, giữa điều bạn nghĩ và điều bạn cảm nhận, đang giúp bạn ở trong một trạng thái cân bằng hiếm có. Hãy trân trọng cảm giác khỏe mạnh trọn vẹn này.", reversed: "Mất cân bằng giữa các khía cạnh trong cuộc sống — quá nhiều cho công việc, quá ít cho bản thân — có thể đang âm thầm ảnh hưởng đến sức khỏe của bạn hơn bạn nhận ra." },
      study: { upright: "Học nhóm, trao đổi với một người bạn cùng chí hướng, hoặc tìm một người học cùng có thể mang lại hiệu quả bất ngờ hơn việc tự học một mình trong giai đoạn này.", reversed: "Sự phân tâm giữa nhiều lựa chọn — môn học nào, hướng đi nào — có thể khiến bạn khó tập trung dồn hết sức cho một mục tiêu rõ ràng." },
      general: { upright: "Một ngày thuận lợi cho những kết nối ý nghĩa và những lựa chọn xuất phát từ trái tim, không phải từ sự sợ hãi hay áp lực phải chọn điều \"an toàn\".", reversed: "Hôm nay bạn có thể cần đưa ra một lựa chọn khó — hãy cân nhắc kỹ điều gì thật sự quan trọng với bạn, không phải điều người khác nghĩ là quan trọng." }
    },
    icon: "lovers"
  },
  {
    id: "chariot", number: 7, numeral: "VII",
    nameVi: "Cỗ Xe", nameTraditional: "The Chariot",
    keywords: ["ý chí", "chiến thắng", "kiểm soát", "quyết tâm"],
    general: {
      upright: "Người chiến binh trên Cỗ Xe không có dây cương để điều khiển hai con nhân sư đối nghịch — anh tiến về phía trước chỉ bằng ý chí và sự tập trung tuyệt đối vào mục tiêu. Đây là lúc những lực kéo bạn về hai hướng khác nhau cần được hợp nhất bởi một quyết tâm rõ ràng. Khi bạn biết mình đang đi đâu và vì sao, mọi trở ngại trên đường chỉ còn là chi tiết.",
      reversed: "Bạn có thể đang để hai luồng suy nghĩ, hai mục tiêu, hay hai phần trong chính mình kéo về những hướng đối lập mà không có điểm hợp nhất. Cảm giác mất kiểm soát, đi mãi mà không tới đâu, thường xuất hiện khi thiếu một mục tiêu đủ rõ ràng để định hướng tất cả nỗ lực."
    },
    topics: {
      love: { upright: "Bạn đang chủ động dẫn dắt mối quan hệ theo đúng hướng mình mong muốn, với một sự quyết tâm rõ ràng về điều mình cần và sẵn sàng theo đuổi nó. Sự chủ động này, khi đi cùng sự tôn trọng, sẽ tạo ra tiến triển thật sự.", reversed: "Sự giằng co giữa hai hướng đi khác nhau — tiếp tục hay dừng lại, tiến tới hay rút lui — có thể khiến mối quan hệ của bạn thiếu ổn định. Hãy chọn một hướng và cam kết với nó, ít nhất là trong một khoảng thời gian đủ để biết nó có thật sự đúng không." },
      career: { upright: "Quyết tâm và sự tập trung cao độ sẽ giúp bạn vượt qua thử thách và đạt được mục tiêu công việc đã đặt ra, dù con đường có thể không hề dễ dàng. Đừng để bị phân tán bởi những việc không thật sự quan trọng.", reversed: "Thiếu một định hướng rõ ràng có thể khiến bạn loay hoay giữa nhiều việc cùng lúc, bỏ ra nhiều công sức mà chưa thật sự hiệu quả. Hãy dừng lại và xác định lại đâu là mục tiêu thật sự đáng theo đuổi." },
      money: { upright: "Sự quyết đoán trong kế hoạch tài chính — dám đặt mục tiêu, dám cắt giảm những gì không cần thiết — sẽ giúp bạn tiến gần hơn đến điều mình đang nhắm tới.", reversed: "Đừng đưa ra quyết định tài chính lớn khi cảm thấy thiếu kiểm soát hoặc đang bị cuốn theo cảm xúc nhất thời — một quyết định vội vàng lúc này có thể kéo bạn đi xa hướng bạn muốn." },
      health: { upright: "Quyết tâm theo đuổi một mục tiêu sức khỏe cụ thể — một mốc cân nặng, một quãng đường chạy, một thói quen mới — sẽ mang lại kết quả rõ rệt nếu bạn giữ được sự tập trung.", reversed: "Cơ thể có thể đang mất cân bằng vì bạn cố gắng kiểm soát quá nhiều thứ cùng lúc — ăn kiêng, tập luyện, công việc — mà không có một thứ tự ưu tiên rõ ràng. Hãy chọn một điều để tập trung trước." },
      study: { upright: "Sự tập trung cao độ và quyết tâm dồn hết sức cho một mục tiêu sẽ giúp bạn vượt qua kỳ thi hoặc môn học khó nhất. Đây là thời điểm năng lượng và ý chí của bạn ở mức cao.", reversed: "Tâm trí phân tán giữa nhiều việc có thể khiến bạn khó duy trì động lực học tập lâu dài — hãy thử thu hẹp lại, chỉ tập trung vào một mục tiêu gần nhất." },
      general: { upright: "Hôm nay là ngày để tiến về phía trước với quyết tâm và sự tự tin — đừng chờ mọi thứ hoàn hảo, hãy bắt đầu di chuyển theo hướng bạn đã chọn.", reversed: "Hãy chậm lại một chút nếu bạn cảm thấy mọi thứ đang vượt khỏi tầm kiểm soát — đôi khi dừng lại để định hướng lại quan trọng hơn là cố lao đi nhanh hơn." }
    },
    icon: "chariot"
  },
  {
    id: "strength", number: 8, numeral: "VIII",
    nameVi: "Sức Mạnh", nameTraditional: "Strength",
    keywords: ["can đảm", "kiên nhẫn", "nội lực", "dịu dàng nhưng kiên định"],
    general: {
      upright: "Một người phụ nữ đặt tay nhẹ nhàng lên hàm con sư tử, không bằng vũ lực mà bằng một sự bình thản tuyệt đối — đó là sức mạnh thật sự: không phải áp đảo, mà là thuần hóa bằng sự kiên định dịu dàng. Bạn có nhiều nội lực hơn mình nghĩ, chỉ cần biết dùng nó bằng sự bình tĩnh thay vì gồng mình chống lại mọi thứ. Lòng can đảm lớn nhất thường im lặng và bền bỉ, không cần phô trương.",
      reversed: "Sự tự nghi ngờ, hoặc cảm giác mình không đủ mạnh mẽ để đối diện với một tình huống khó, có thể đang khiến bạn yếu lòng hơn cần thiết. Đôi khi con sư tử bên trong bạn không hung hãn vì nó đang sợ — và điều nó cần không phải là bị trấn áp, mà là được vỗ về."
    },
    topics: {
      love: { upright: "Sự kiên nhẫn và dịu dàng, hơn là tranh luận hay áp đặt, sẽ giúp hàn gắn hoặc củng cố mối quan hệ của bạn trong giai đoạn này. Đôi khi yêu thương một người khó tính nhất chính là bài học lớn nhất về sức mạnh nội tâm.", reversed: "Bạn có thể đang mất kiên nhẫn, hoặc bắt đầu nghi ngờ khả năng của mình trong việc duy trì mối quan hệ này khi mọi thứ trở nên khó khăn. Hãy cho mình thời gian để lấy lại bình tĩnh trước khi đưa ra bất kỳ quyết định nào." },
      career: { upright: "Lòng kiên trì và sự bình tĩnh, không phải sự hung hăng hay vội vã, sẽ giúp bạn xử lý khéo léo những tình huống khó hoặc những đồng nghiệp khó chịu trong công việc. Sức mạnh thật sự đôi khi là biết im lặng đúng lúc.", reversed: "Áp lực công việc kéo dài có thể khiến bạn cảm thấy đuối sức hoặc bắt đầu nghi ngờ năng lực của chính mình. Đây không phải lúc để gồng thêm, mà là lúc để tìm một chỗ dựa hoặc cho phép mình nghỉ ngơi một chút." },
      money: { upright: "Sự kiên nhẫn trong việc quản lý tài chính — không hoảng loạn trước biến động, không vội vàng trước cám dỗ — sẽ mang lại kết quả bền vững hơn theo thời gian so với những quyết định nóng vội.", reversed: "Đừng để sự lo lắng về tiền bạc làm bạn mất bình tĩnh và đưa ra những quyết định vội vàng mà sau này phải hối hận. Một hơi thở sâu trước khi quyết định sẽ giúp ích nhiều hơn bạn nghĩ." },
      health: { upright: "Nội lực và sự kiên trì âm thầm, không phô trương, sẽ giúp bạn vượt qua một giai đoạn khó khăn về sức khỏe tốt hơn là cố gắng bằng sự hoảng loạn hay ép buộc cơ thể.", reversed: "Bạn có thể đang cảm thấy kiệt sức hoặc thiếu động lực để chăm sóc bản thân, như thể đã cố gắng quá lâu mà chưa được nghỉ. Hãy cho phép mình yếu đuối một chút — đó không phải là thất bại." },
      study: { upright: "Sự kiên trì bền bỉ, từng bước nhỏ mỗi ngày, sẽ giúp bạn vượt qua môn học khó hơn là cố nhồi nhét trong một đêm. Sức mạnh trong học tập nằm ở sự đều đặn, không phải ở cường độ.", reversed: "Cảm giác nản lòng trước một môn học khó có thể khiến bạn dễ bỏ cuộc ngay trước khi đạt được kết quả. Hãy nhắc mình rằng cảm giác muốn bỏ cuộc thường xuất hiện ngay trước bước ngoặt." },
      general: { upright: "Hôm nay hãy đối diện khó khăn bằng sự bình tĩnh, kiên nhẫn và dịu dàng với chính mình — không cần phải mạnh mẽ theo cách ồn ào để chứng minh điều gì.", reversed: "Đừng quá khắc nghiệt với bản thân nếu mọi thứ chưa diễn ra như ý hôm nay — lòng tự trắc ẩn cũng là một dạng sức mạnh." }
    },
    icon: "strength"
  },
  {
    id: "hermit", number: 9, numeral: "IX",
    nameVi: "Ẩn Sĩ", nameTraditional: "The Hermit",
    keywords: ["nội tâm", "cô độc", "chiêm nghiệm", "tìm kiếm sự thật"],
    general: {
      upright: "Ẩn Sĩ đứng một mình trên đỉnh núi cao, tay cầm chiếc đèn lồng nhỏ — không đủ sáng để soi cả thế giới, nhưng đủ để soi rõ từng bước chân ngay trước mặt. Đây là thời điểm phù hợp để lùi lại khỏi sự ồn ào, tĩnh tâm và tìm câu trả lời từ chính nội tâm mình, thay vì tìm kiếm nó ở bên ngoài. Sự cô độc lúc này không phải là cô đơn, mà là một khoảng riêng cần thiết để bạn nghe rõ chính mình.",
      reversed: "Sự cô lập quá mức, hoặc né tránh kết nối với người khác chỉ vì sợ bị làm phiền, có thể đang khiến bạn thêm lạc lối thay vì sáng tỏ hơn. Có một sự khác biệt giữa việc lùi lại để chiêm nghiệm và việc trốn chạy khỏi những điều cần đối mặt."
    },
    topics: {
      love: { upright: "Bạn cần thời gian ở một mình để hiểu rõ điều mình thật sự mong muốn trong tình cảm, trước khi có thể trao nó cho ai khác một cách trọn vẹn. Đôi khi khoảng cách tạm thời lại giúp một mối quan hệ trở nên rõ ràng hơn.", reversed: "Sự xa cách hoặc thu mình lại quá mức có thể đang tạo khoảng cách với đối phương, khiến họ cảm thấy bị bỏ lại bên ngoài thế giới riêng của bạn. Hãy cho họ biết bạn cần thời gian, đừng để họ tự đoán." },
      career: { upright: "Làm việc độc lập, tập trung sâu vào chuyên môn của riêng mình mà không bị phân tán bởi ý kiến xung quanh, sẽ mang lại hiệu quả tốt nhất cho bạn lúc này. Đôi khi câu trả lời tốt nhất đến từ việc tự mình ngồi lại suy nghĩ kỹ.", reversed: "Sự cô lập với đồng nghiệp, từ chối mọi sự giúp đỡ vì muốn tự mình xoay xở, có thể khiến bạn bỏ lỡ những hỗ trợ thật sự cần thiết. Không phải lúc nào tự lực cũng là lựa chọn khôn ngoan nhất." },
      money: { upright: "Dành thời gian ngồi lại một mình, nhìn thẳng vào các con số và lập kế hoạch tài chính mà không bị ai chi phối, sẽ giúp bạn sáng suốt và thực tế hơn trong những quyết định tới.", reversed: "Đừng tự mình gánh hết áp lực tài chính trong im lặng — đôi khi việc hỏi ý kiến người khác, hoặc đơn giản là chia sẻ nỗi lo, có thể giúp bạn nhìn ra một lối thoát mà một mình không thấy được." },
      health: { upright: "Thời gian tĩnh lặng, nghỉ ngơi một mình, tránh xa những cuộc gặp hay tiếng ồn không cần thiết, sẽ giúp bạn hồi phục năng lượng tốt hơn bất kỳ liệu pháp nào khác lúc này.", reversed: "Sự cô đơn kéo dài, nếu không được nhận ra và xử lý, có thể đang ảnh hưởng đến tâm lý và sức khỏe tinh thần của bạn nhiều hơn bạn tưởng. Hãy thử kết nối lại với một người bạn tin tưởng." },
      study: { upright: "Tự học, nghiên cứu sâu một mình theo nhịp độ riêng của bạn, sẽ giúp bạn hiểu vấn đề thấu đáo hơn là chạy theo tốc độ của một nhóm học chung.", reversed: "Đừng ngại hỏi người khác nếu việc tự học một mình khiến bạn bị bí hoặc lạc hướng quá lâu — đôi khi một câu giải thích từ người khác có thể tiết kiệm cho bạn nhiều ngày tự mò mẫm." },
      general: { upright: "Một ngày phù hợp để ở một mình, suy ngẫm và lắng nghe chính mình nhiều hơn là chạy theo nhịp sống xung quanh. Câu trả lời bạn cần có thể đang chờ trong sự im lặng đó.", reversed: "Hãy thử mở lòng kết nối với ai đó hôm nay, đừng thu mình quá lâu — có những điều chỉ trở nên rõ ràng hơn khi được chia sẻ ra ngoài." }
    },
    icon: "hermit"
  },
  {
    id: "wheel", number: 10, numeral: "X",
    nameVi: "Vòng Xoay Số Phận", nameTraditional: "Wheel of Fortune",
    keywords: ["vận may", "chu kỳ", "thay đổi", "số phận"],
    general: {
      upright: "Vòng xoay khổng lồ vẫn luôn quay, mang theo những thăng và trầm không ai có thể giữ mãi ở một vị trí. Một vòng xoay vận may đang đưa đến những thay đổi và cơ hội mới trong cuộc sống của bạn — không phải do bạn kiểm soát hoàn toàn, mà là một phần tự nhiên của chu kỳ đời sống. Hãy đón nhận nó với sự cởi mở, vì những gì đang đến có thể tốt hơn những gì bạn đã hoạch định.",
      reversed: "Một giai đoạn không thuận lợi, hoặc cảm giác mọi thứ đang ngoài tầm kiểm soát, có thể đang khiến bạn thấy mệt mỏi và bất lực. Nhưng hãy nhớ rằng vòng xoay không bao giờ dừng lại ở một điểm — nếu hiện tại là điểm thấp, nó cũng sẽ đi qua."
    },
    topics: {
      love: { upright: "Một bước ngoặt bất ngờ nhưng tích cực có thể xảy đến với chuyện tình cảm của bạn — một cuộc gặp không hẹn trước, một thay đổi giúp mối quan hệ bước sang trang mới. Hãy để mình đón nhận nó mà không cần kiểm soát mọi chi tiết.", reversed: "Những biến động ngoài ý muốn — khoảng cách địa lý, sự thay đổi trong hoàn cảnh sống, một sự kiện bất ngờ — có thể đang khiến mối quan hệ trở nên bất ổn. Hãy linh hoạt thích nghi cùng nhau thay vì chống lại sự thay đổi." },
      career: { upright: "Một cơ hội nghề nghiệp bất ngờ có thể xuất hiện từ nơi bạn ít ngờ tới nhất — hãy sẵn sàng đón nhận nó, ngay cả khi nó không nằm trong kế hoạch ban đầu của bạn.", reversed: "Sự trì trệ, hoặc những thay đổi không mong muốn ngoài tầm kiểm soát của bạn, có thể đang ảnh hưởng đến công việc hiện tại. Đừng cố gắng chống lại nó — hãy tìm cách thích nghi và chờ đợi vòng xoay tiếp tục chuyển động." },
      money: { upright: "Vận tài chính đang chuyển biến tích cực, có thể đến từ một nguồn bất ngờ — một khoản thu nhập, một cơ hội, hay một sự may mắn nhỏ đúng lúc bạn cần. Hãy đón nhận nó với lòng biết ơn.", reversed: "Biến động tài chính ngoài dự tính có thể khiến bạn cần điều chỉnh kế hoạch đã đặt ra — đừng quá cứng nhắc bám vào con số cũ khi hoàn cảnh đã thay đổi." },
      health: { upright: "Một sự thay đổi tích cực về thể chất hoặc tinh thần đang đến với bạn, có thể không phải do bạn chủ động tạo ra mà đơn giản là một chu kỳ tốt đang bắt đầu. Hãy tận hưởng nó.", reversed: "Sức khỏe có thể đang biến động theo những cách bạn chưa quen — hãy chú ý nhiều hơn đến những thay đổi của cơ thể, dù nhỏ, và đừng cho rằng mọi thứ sẽ tự ổn định." },
      study: { upright: "Một cơ hội học tập bất ngờ, hoặc một bước ngoặt tốt trong kết quả học mà bạn không hoàn toàn ngờ tới, có thể xuất hiện trong giai đoạn này. Hãy giữ tâm thế cởi mở.", reversed: "Kết quả học tập có thể không như mong đợi do những yếu tố ngoài tầm kiểm soát — một đề thi khó bất ngờ, một sự cố ngoài ý muốn. Đừng quá khắc nghiệt với bản thân vì điều đó." },
      general: { upright: "Hôm nay vận may có thể nghiêng về phía bạn — hãy đón nhận những điều bất ngờ với một tâm thế cởi mở, vì chúng có thể mang đến nhiều hơn những gì bạn mong đợi.", reversed: "Nếu mọi thứ chưa thuận lợi hôm nay, hãy nhớ rằng vòng xoay luôn tiếp tục chuyển động — không có giai đoạn khó khăn nào là vĩnh viễn." }
    },
    icon: "wheel"
  },
  {
    id: "justice", number: 11, numeral: "XI",
    nameVi: "Công Lý", nameTraditional: "Justice",
    keywords: ["công bằng", "sự thật", "nhân quả", "quyết định"],
    general: {
      upright: "Vị thần Công Lý ngồi giữa hai cột trụ, một tay cầm thanh kiếm sắc bén của sự thật, một tay cầm chiếc cân để đo lường mọi việc một cách khách quan. Sự công bằng, rõ ràng và đúng đắn đang được thiết lập trong tình huống của bạn — mọi việc đều có nhân quả của nó, và những gì bạn đã làm, tốt hay chưa tốt, đang dần được phản chiếu trở lại. Đây là lúc để đưa ra quyết định dựa trên sự thật, không phải cảm xúc nhất thời.",
      reversed: "Sự thiếu công bằng, một quyết định chưa thỏa đáng, hoặc cảm giác bị đối xử không đúng có thể đang gây khó chịu cho bạn. Cũng có thể chính bạn đang né tránh nhìn nhận sự thật về một tình huống vì nó không có lợi cho mình."
    },
    topics: {
      love: { upright: "Sự công bằng và thẳng thắn giữa hai người — cùng chia sẻ trách nhiệm, cùng lắng nghe nhau một cách công tâm — sẽ giúp mối quan hệ phát triển lành mạnh và bền vững hơn.", reversed: "Một bên có thể đang cảm thấy không được đối xử công bằng trong mối quan hệ — gánh nhiều hơn, hy sinh nhiều hơn mà không được nhìn nhận đúng mức. Điều này cần được nói ra, không nên để âm ỉ." },
      career: { upright: "Sự nỗ lực của bạn sẽ được nhìn nhận và đánh giá công bằng trong thời gian tới — những gì bạn đã bỏ ra đang dần được đáp lại đúng với giá trị thật của nó.", reversed: "Bạn có thể đang cảm thấy bất công hoặc chưa được công nhận đúng mức ở nơi làm việc. Trước khi phản ứng, hãy thu thập đủ thông tin và bằng chứng để trình bày vấn đề một cách rõ ràng, công tâm." },
      money: { upright: "Một quyết định tài chính công bằng, minh bạch — chia rõ trách nhiệm, ghi chép rõ ràng — sẽ mang lại kết quả tốt và tránh được những tranh chấp không cần thiết về lâu dài.", reversed: "Hãy kiểm tra kỹ các thỏa thuận, hợp đồng hoặc điều khoản tài chính để tránh những điều khoản thiếu công bằng có thể gây thiệt hại cho bạn về sau." },
      health: { upright: "Sự cân bằng giữa nghỉ ngơi và làm việc, giữa cho đi và nhận lại cho cơ thể, sẽ giúp sức khỏe của bạn ổn định và bền vững hơn theo một quy luật tự nhiên, công bằng.", reversed: "Mất cân bằng trong lối sống — làm việc quá nhiều, nghỉ ngơi quá ít — có thể đang gây ra những hệ quả mà bạn chưa lường tới hết. Cơ thể luôn ghi nhớ những gì bị đối xử không công bằng với nó." },
      study: { upright: "Kết quả học tập sẽ phản ánh đúng những gì bạn đã thật sự nỗ lực bỏ ra — không hơn, không kém. Đây là lúc công bằng lên tiếng cho sự cố gắng của bạn.", reversed: "Hãy xem lại liệu phương pháp học của bạn đã thật sự công bằng với chính sức lực mình bỏ ra hay chưa — có thể bạn đang cố quá nhiều cho một kết quả không tương xứng." },
      general: { upright: "Hôm nay là ngày để đưa ra những quyết định công bằng, sáng suốt và có cân nhắc kỹ — dựa trên sự thật, không phải dựa trên cảm xúc bốc đồng.", reversed: "Một điều gì đó có thể chưa diễn ra công bằng hôm nay — hãy bình tĩnh tìm hiểu rõ trước khi phản ứng, sự thật thường cần thời gian để lộ ra đầy đủ." }
    },
    icon: "justice"
  },
  {
    id: "hanged", number: 12, numeral: "XII",
    nameVi: "Người Treo Ngược", nameTraditional: "The Hanged Man",
    keywords: ["buông bỏ", "góc nhìn mới", "tạm dừng", "hy sinh"],
    general: {
      upright: "Người treo ngược trên cây, một chân buộc dây, gương mặt lại bình thản đến lạ — bởi anh đã nhận ra rằng đôi khi phải đảo ngược cả thế giới mới thấy được điều mình bỏ lỡ khi đứng thẳng. Một khoảng dừng cần thiết, dù có thể khiến bạn khó chịu lúc đầu, đang giúp bạn nhìn vấn đề từ một góc độ hoàn toàn mới. Đừng vội vùng vẫy thoát ra — hãy ở lại trong sự bất tiện này một chút lâu hơn, câu trả lời thường nằm ở phía bạn chưa từng nhìn tới.",
      reversed: "Sự trì hoãn kéo dài, hoặc việc chống lại một sự thay đổi cần thiết chỉ vì sợ mất kiểm soát, đang khiến bạn mắc kẹt ở một chỗ lâu hơn cần thiết. Có những việc không thể được giải quyết bằng cách cố gắng nhiều hơn — chúng cần một góc nhìn khác hẳn, mà bạn vẫn chưa cho phép mình thử."
    },
    topics: {
      love: { upright: "Thử nhìn mối quan hệ từ góc nhìn của đối phương, đặt mình vào hoàn cảnh của họ dù chỉ trong chốc lát, có thể giúp bạn hiểu nhau hơn nhiều so với việc cố chứng minh mình đúng.", reversed: "Sự cố chấp, không muốn thay đổi cách nhìn hay cách làm quen thuộc, có thể đang khiến mối quan hệ rơi vào bế tắc dù cả hai đều không muốn vậy. Ai chịu nhìn theo cách khác trước sẽ là người mở được cánh cửa." },
      career: { upright: "Tạm dừng lại để nhìn nhận công việc từ một góc độ khác — của khách hàng, của đối thủ, của người ngoài cuộc — có thể mở ra một hướng giải quyết mà bạn chưa từng nghĩ tới khi còn ở giữa guồng quay.", reversed: "Sự trì trệ kéo dài trong công việc có thể xuất phát từ việc bạn đang ngại thay đổi một cách làm cũ, dù nó rõ ràng không còn hiệu quả. Cái giá của việc không thay đổi đôi khi lớn hơn cái giá của sự thay đổi." },
      money: { upright: "Tạm dừng các quyết định tài chính lớn trong lúc này, để nhìn nhận lại toàn bộ tình hình một cách khách quan hơn, sẽ giúp bạn tránh được một sai lầm tốn kém.", reversed: "Sự chần chừ không dứt khoát, cứ để mọi thứ lửng lơ mà không quyết định, có thể đang khiến một cơ hội tài chính tốt trôi qua trong im lặng." },
      health: { upright: "Một giai đoạn nghỉ ngơi, chậm lại, thậm chí là nằm yên không làm gì cả, sẽ giúp cơ thể và tâm trí bạn được phục hồi đúng cách hơn là cố gắng gồng tiếp.", reversed: "Việc trì hoãn chăm sóc sức khỏe — lần khám sức khỏe bạn cứ hẹn rồi lại hủy, một triệu chứng bạn cứ định \"để sau xem có đỡ không\" — có thể khiến tình trạng kéo dài lâu hơn cần thiết." },
      study: { upright: "Thử một phương pháp học hoàn toàn khác, nhìn vấn đề theo một cách chưa từng thử, có thể giúp bạn hiểu sâu một kiến thức mà cách học cũ mãi không vào được.", reversed: "Sự cố chấp với một cách học cũ, dù nó rõ ràng không hiệu quả với bạn, có thể đang cản trở tiến bộ nhiều hơn bạn nhận ra. Thử thay đổi, dù chỉ một chút, cũng đáng để làm." },
      general: { upright: "Hôm nay hãy cho phép mình tạm dừng và nhìn mọi việc theo một góc độ khác — đôi khi điều bạn cần không phải là làm nhiều hơn, mà là nhìn khác đi.", reversed: "Đừng cố chấp giữ nguyên cách cũ nếu nó đang không còn hiệu quả với bạn — sự linh hoạt hôm nay sẽ giúp bạn nhẹ nhõm hơn nhiều." }
    },
    icon: "hanged"
  },
  {
    id: "death", number: 13, numeral: "XIII",
    nameVi: "Tử Thần", nameTraditional: "Death",
    keywords: ["kết thúc", "chuyển giao", "tái sinh", "buông bỏ"],
    general: {
      upright: "Tử Thần cưỡi ngựa trắng đi qua mọi tầng lớp, không phân biệt ai — vì sự kết thúc là quy luật chung của mọi thứ, không phải lời nguyền chỉ dành riêng cho bạn. Một giai đoạn đang kết thúc để mở đường cho một khởi đầu mới hoàn toàn khác, và dù điều đó có thể gây ra cảm giác mất mát, nó cũng đang giải phóng không gian cho thứ gì đó cần đến. Hãy để chương cũ được khép lại một cách trọn vẹn, không nửa vời.",
      reversed: "Sự sợ hãi thay đổi, hoặc việc cố bám giữ những gì đã không còn phù hợp chỉ vì sự quen thuộc, đang kìm hãm bạn ở một nơi mà bạn đã thật ra muốn rời đi từ lâu. Buông tay không phải là thất bại — đôi khi đó là hành động can đảm nhất."
    },
    topics: {
      love: { upright: "Một chương cũ trong tình cảm đang khép lại — có thể là một mối quan hệ, một cách yêu, hay một phiên bản cũ của chính bạn — để mở ra một giai đoạn mới phù hợp hơn với con người bạn đang trở thành.", reversed: "Sự níu kéo một mối quan hệ đã không còn phù hợp, vì sợ cảm giác trống vắng khi không còn nó, có thể đang khiến bạn tổn thương thêm mỗi ngày trôi qua. Đôi khi việc buông tay đau một lần còn nhẹ hơn việc chịu đau từng ngày." },
      career: { upright: "Một vai trò, một dự án, hay một giai đoạn công việc cũ đang đi đến hồi kết — và điều đó đang mở đường cho một cơ hội mới mà bạn chưa thể thấy hết được lúc này.", reversed: "Sự sợ thay đổi có thể đang khiến bạn mắc kẹt trong một công việc không còn phù hợp, chỉ vì sự an toàn giả tạo của những gì đã quen. Hãy tự hỏi mình đang ở lại vì lựa chọn, hay vì sợ?" },
      money: { upright: "Đã đến lúc buông bỏ một khoản đầu tư, một thói quen chi tiêu, hay một cách quản lý tiền bạc không còn hiệu quả — việc kết thúc nó sớm sẽ tốt hơn là kéo dài thêm.", reversed: "Việc né tránh đối mặt với một vấn đề tài chính nghiêm trọng, hy vọng nó sẽ tự biến mất, thường chỉ khiến nó kéo dài và trở nên tệ hơn theo thời gian." },
      health: { upright: "Một thói quen không lành mạnh cần được kết thúc thật sự, không phải tạm dừng rồi quay lại, để cơ thể bạn có cơ hội hồi phục và bắt đầu lại từ một nền tảng sạch hơn.", reversed: "Sự chống lại một thay đổi cần thiết trong lối sống, dù bạn biết rõ nó cần xảy ra, có thể đang ảnh hưởng đến sức khỏe của bạn về lâu dài hơn bạn muốn thừa nhận." },
      study: { upright: "Đã đến lúc từ bỏ hẳn một phương pháp học không hiệu quả, dù bạn đã quen với nó, để bắt đầu một cách tiếp cận hoàn toàn mới phù hợp hơn với bạn lúc này.", reversed: "Sự níu giữ một cách học cũ, dù kết quả nó mang lại không hề tốt, có thể đang làm bạn chậm tiến bộ hơn so với việc chịu khó thử điều gì đó khác." },
      general: { upright: "Hôm nay có thể là lúc để khép lại một điều gì đó một cách trọn vẹn và đón nhận sự khởi đầu mới — đừng giữ một chân ở cửa cũ khi chân kia đã bước sang cửa mới.", reversed: "Đừng quá sợ hãi trước những thay đổi cần thiết đang đến với bạn — chúng đang đến không phải để trừng phạt bạn, mà để dẫn bạn đến một nơi đúng hơn." }
    },
    icon: "death"
  },
  {
    id: "temperance", number: 14, numeral: "XIV",
    nameVi: "Điều Độ", nameTraditional: "Temperance",
    keywords: ["cân bằng", "hòa hợp", "điều độ", "kiên nhẫn"],
    general: {
      upright: "Vị thiên thần đứng một chân trên đất, một chân trong nước, rót nước qua lại giữa hai chiếc cốc mà không làm đổ một giọt — đó là hình ảnh hoàn hảo của sự điều độ: pha trộn các phần đối lập trong cuộc sống thành một thể hài hòa. Sự cân bằng, hòa hợp đang giúp mọi thứ diễn ra êm xuôi hơn, không phải vì mọi thứ hoàn hảo, mà vì bạn đã học được cách dung hòa chúng. Hãy tiếp tục giữ nhịp điều độ này, từng chút một, không cần vội.",
      reversed: "Sự mất cân bằng, hoặc sự thái quá ở một khía cạnh nào đó trong cuộc sống — làm việc quá nhiều, nghỉ ngơi quá ít, cho đi quá nhiều hoặc giữ lại quá chặt — đang gây ra xáo trộn mà bạn có thể đang cảm nhận được nhưng chưa rõ nguyên nhân."
    },
    topics: {
      love: { upright: "Sự hòa hợp, thấu hiểu và kiên nhẫn lắng nghe nhau đang giúp mối quan hệ của bạn trở nên bền vững hơn từng ngày, như nước được pha đúng tỷ lệ, không quá nhiều cũng không quá ít của bất kỳ điều gì.", reversed: "Sự mất cân bằng giữa cho và nhận — một người luôn nhường, một người luôn được nhường — có thể đang khiến một bên cảm thấy thiệt thòi dù chưa nói ra. Tình yêu cần được pha trộn công bằng hơn." },
      career: { upright: "Sự điều độ giữa công việc và nghỉ ngơi, giữa tham vọng và giới hạn của bản thân, sẽ giúp bạn duy trì hiệu suất lâu dài hơn là cố gắng dồn hết sức trong một thời gian ngắn.", reversed: "Làm việc quá sức, hoặc ngược lại, buông lơi quá mức, đều là những hình thức mất cân bằng có thể khiến bạn dễ kiệt sức hoặc tụt lại. Hãy tìm lại điểm giữa cho riêng mình." },
      money: { upright: "Chi tiêu điều độ, có kế hoạch, không quá khắt khe nhưng cũng không buông thả, sẽ giúp tài chính của bạn duy trì sự ổn định lâu dài mà không cảm thấy gò bó.", reversed: "Sự mất cân bằng trong thu chi — chi tiêu quá đà ở một giai đoạn, rồi thắt lưng buộc bụng cực đoan ở giai đoạn sau — có thể đang khiến tài chính của bạn chao đảo theo một vòng lặp không lành mạnh." },
      health: { upright: "Một lối sống điều độ, cân bằng giữa vận động và nghỉ ngơi, giữa ăn uống và tiết chế, sẽ tốt cho sức khỏe của bạn hơn bất kỳ phương pháp cực đoan nào.", reversed: "Sự thái quá ở một thói quen nào đó — tập luyện quá độ, ăn kiêng quá khắt khe, hoặc ngược lại buông thả hoàn toàn — có thể đang ảnh hưởng đến cơ thể bạn theo cách bạn chưa lường hết." },
      study: { upright: "Phân bổ thời gian học tập và nghỉ ngơi một cách hợp lý, không học dồn cũng không trì hoãn, sẽ giúp bạn tiếp thu hiệu quả và bền lâu hơn nhiều so với học gấp gáp.", reversed: "Học dồn vào một khoảng thời gian ngắn, hoặc để thời gian học và nghỉ mất cân bằng hoàn toàn, có thể khiến bạn dễ quá tải và tiếp thu kém hơn dự tính." },
      general: { upright: "Hôm nay hãy tìm kiếm sự cân bằng giữa các khía cạnh trong cuộc sống của bạn — giữa làm và nghỉ, giữa cho và nhận, giữa nói và lắng nghe.", reversed: "Có điều gì đó trong ngày hôm nay đang mất cân bằng — hãy điều chỉnh lại một chút, dù chỉ là một thay đổi nhỏ, trước khi nó tích tụ thành điều lớn hơn." }
    },
    icon: "temperance"
  },
  {
    id: "devil", number: 15, numeral: "XV",
    nameVi: "Ác Quỷ", nameTraditional: "The Devil",
    keywords: ["ràng buộc", "cám dỗ", "lệ thuộc", "mặt tối"],
    general: {
      upright: "Hai hình người đứng bị xích dưới chân Ác Quỷ, nhưng nhìn kỹ sẽ thấy chiếc xích quanh cổ họ khá lỏng — họ có thể tự tháo ra nếu muốn, chỉ là chưa nhận ra điều đó. Bạn có thể đang bị ràng buộc bởi một cám dỗ, một thói quen, hay một nỗi sợ đang kìm hãm sự tự do của mình, nhưng sự ràng buộc ấy phần nhiều đến từ chính tâm trí, không phải từ một thế lực bên ngoài. Nhận ra chiếc xích là bước đầu để có thể tháo nó ra.",
      reversed: "Bạn đang dần thoát khỏi một ràng buộc, hoặc bắt đầu nhận ra rõ ràng điều gì đang kìm hãm mình — đây là một dấu hiệu rất tích cực, dù quá trình giải thoát có thể chưa hoàn toàn dễ dàng. Hãy tiếp tục, ánh sáng đang ở gần hơn bạn nghĩ."
    },
    topics: {
      love: { upright: "Một mối quan hệ phụ thuộc, hoặc thiếu lành mạnh theo một cách khó gọi tên, có thể đang khiến bạn mất tự do là chính mình khi ở bên người đó. Hãy tự hỏi liệu mình đang yêu, hay đang sợ mất.", reversed: "Bạn đang dần nhận ra và thoát khỏi một sự ràng buộc không lành mạnh trong tình cảm — có thể là một mối quan hệ, có thể là một cách yêu đầy lo lắng và kiểm soát. Đây là một sự giải thoát đáng được ăn mừng." },
      career: { upright: "Áp lực công việc, hoặc một thói quen tiêu cực như làm việc quá độ để cảm thấy có giá trị, có thể đang khiến bạn cảm thấy bị mắc kẹt trong một vòng lặp không lối thoát.", reversed: "Bạn đang bắt đầu tìm cách thoát khỏi một môi trường làm việc gây ngột ngạt, hoặc một thói quen làm việc không lành mạnh đã bám lấy bạn quá lâu. Bước đầu nhận ra đã là một nửa của sự thay đổi." },
      money: { upright: "Một thói quen chi tiêu khó bỏ, hoặc một khoản nợ đang treo lơ lửng, có thể đang ràng buộc sự tự do tài chính của bạn nhiều hơn bạn muốn thừa nhận với chính mình.", reversed: "Bạn đang dần kiểm soát lại và thoát khỏi một gánh nặng tài chính — có thể chậm, nhưng đang đi đúng hướng. Đừng để một vài bước lùi nhỏ làm bạn nản lòng." },
      health: { upright: "Một thói quen không lành mạnh — có thể là một sự lệ thuộc nhỏ mà bạn vẫn tự nhắc mình \"kiểm soát được\" — thực ra có thể đang âm thầm ảnh hưởng đến sức khỏe của bạn nhiều hơn bạn nghĩ.", reversed: "Bạn đang có những bước tiến tích cực để thoát khỏi một thói quen xấu — hãy tự hào về điều đó, dù chặng đường phía trước vẫn còn dài." },
      study: { upright: "Sự trì hoãn, hoặc một thói quen xao nhãng khó bỏ như lướt điện thoại liên tục, có thể đang cản trở việc học của bạn nhiều hơn bạn tưởng.", reversed: "Bạn đang dần lấy lại kỷ luật và thoát khỏi sự trì hoãn trong học tập — mỗi lần bạn chọn ngồi vào bàn học thay vì trì hoãn thêm, bạn đang tháo một mắt xích." },
      general: { upright: "Hôm nay hãy chú ý đến những cám dỗ hoặc thói quen có thể đang kìm hãm bạn một cách lặng lẽ — đôi khi chiếc xích nặng nhất là chiếc xích bạn không nhận ra mình đang đeo.", reversed: "Đây là dấu hiệu tốt cho thấy bạn đang dần thoát khỏi điều từng ràng buộc mình — hãy tiếp tục đi, từng bước, về phía tự do." }
    },
    icon: "devil"
  },
  {
    id: "tower", number: 16, numeral: "XVI",
    nameVi: "Tòa Tháp", nameTraditional: "The Tower",
    keywords: ["biến động", "đổ vỡ", "bất ngờ", "thức tỉnh"],
    general: {
      upright: "Tia sét đánh thẳng vào tòa tháp kiên cố, khiến nó sụp đổ trong tức khắc — không có cảnh báo, không có sự chuẩn bị nào là đủ. Một sự thay đổi bất ngờ, đột ngột có thể làm đảo lộn những gì bạn từng nghĩ là vững chắc, nhưng đôi khi chính tòa tháp đó đã được xây trên một nền tảng sai lầm từ lâu, chỉ là bạn chưa nhìn ra. Sau cú sốc, những gì còn lại sẽ là nền tảng thật, đáng để xây lại.",
      reversed: "Bạn đang cố tránh hoặc trì hoãn một sự thay đổi lớn mà lẽ ra nên đối mặt, có thể vì sợ những gì sẽ sụp đổ theo nó. Nhưng việc trì hoãn một cơn bão không làm nó biến mất — nó chỉ khiến bạn ít thời gian chuẩn bị hơn khi nó thật sự đến."
    },
    topics: {
      love: { upright: "Một sự thật bất ngờ — một lời thú nhận, một phát hiện, một khoảnh khắc nhìn rõ điều vốn bị che giấu — có thể làm thay đổi hoàn toàn cách bạn nhìn về mối quan hệ này. Dù đau, nó cũng là sự thật bạn cần biết.", reversed: "Bạn có thể đang né tránh đối mặt với một vấn đề lớn trong mối quan hệ, hy vọng nếu không nhắc tới nó sẽ tự biến mất. Vấn đề càng bị giữ kín càng lớn dần thêm trong im lặng." },
      career: { upright: "Một biến động bất ngờ trong công việc — một sự thay đổi tổ chức, một quyết định ngoài dự tính — có thể xảy ra, nhưng nó thường mở đường cho một điều gì đó tốt hơn về sau, dù lúc xảy ra không hề dễ chịu.", reversed: "Bạn có thể đang lo sợ một sự thay đổi lớn ở nơi làm việc và cố trì hoãn việc đối mặt với nó — nhưng những dấu hiệu cảnh báo thường đã xuất hiện từ trước, chỉ là bạn chưa muốn nhìn thấy." },
      money: { upright: "Một biến động tài chính bất ngờ có thể xảy ra — hãy chuẩn bị tinh thần ứng biến và có một khoản dự phòng nếu có thể, vì sự ổn định tuyệt đối hiếm khi kéo dài vô thời hạn.", reversed: "Việc né tránh đối mặt với một vấn đề tài chính nghiêm trọng, hy vọng nó sẽ tự ổn định, có thể khiến nó trở nên tệ hơn và khó xử lý hơn khi buộc phải đối mặt." },
      health: { upright: "Một vấn đề sức khỏe bất ngờ có thể xuất hiện, như một lời nhắc nhở thẳng thắn rằng đã đến lúc bạn cần thay đổi cách sống, dù không hề mong muốn theo cách này.", reversed: "Đừng tiếp tục trì hoãn việc kiểm tra hoặc xử lý một vấn đề sức khỏe đáng lo ngại chỉ vì sợ kết quả — biết sớm luôn tốt hơn biết muộn." },
      study: { upright: "Một thay đổi bất ngờ — đề thi khác dự kiến, lịch học thay đổi giờ chót — có thể xảy ra, hãy linh hoạt ứng biến thay vì hoảng loạn khi kế hoạch bị xáo trộn.", reversed: "Việc trì hoãn ôn tập, hy vọng \"chắc sẽ kịp\", có thể dẫn đến một kết quả bất ngờ không mong muốn khi thời gian thực tế không còn nhiều như bạn nghĩ." },
      general: { upright: "Hôm nay có thể có một bất ngờ làm xáo trộn kế hoạch của bạn — hãy giữ vững tâm lý, vì những gì sụp đổ thường là những gì cần phải sụp đổ để có chỗ cho điều tốt hơn.", reversed: "Đừng tiếp tục né tránh một vấn đề mà bạn biết rõ cần phải đối mặt — sự thật luôn dễ chịu hơn khi được đối diện sớm thay vì để nó âm ỉ." }
    },
    icon: "tower"
  },
  {
    id: "star", number: 17, numeral: "XVII",
    nameVi: "Ngôi Sao", nameTraditional: "The Star",
    keywords: ["hy vọng", "cảm hứng", "chữa lành", "niềm tin"],
    general: {
      upright: "Sau bão tố của Tòa Tháp, người phụ nữ trần trụi quỳ bên dòng nước, rót những vì sao xuống mặt đất — không phòng vệ, không che giấu, chỉ còn lại sự chân thật và niềm tin lặng lẽ. Hy vọng, cảm hứng đang dẫn đường cho bạn sau một giai đoạn khó khăn, nhắc bạn rằng ngay cả trong đêm tối nhất, vẫn luôn có ánh sáng nhỏ nào đó dẫn đường. Hãy để mình được chữa lành theo nhịp của riêng nó.",
      reversed: "Bạn có thể đang mất niềm tin, cảm thấy mất phương hướng tạm thời sau một điều gì đó đã làm bạn tổn thương hoặc thất vọng. Đây không phải là dấu chấm hết, chỉ là một đêm dài hơn bạn mong, trước khi trời sáng trở lại."
    },
    topics: {
      love: { upright: "Một niềm tin mới, nhẹ nhàng và đầy hy vọng đang trở lại trong chuyện tình cảm của bạn, như ánh sao đầu tiên xuất hiện sau một cơn mưa dài. Hãy cho phép mình tin tưởng lại, từng chút một.", reversed: "Bạn có thể đang mất niềm tin vào tình yêu sau một tổn thương nào đó, và điều đó hoàn toàn dễ hiểu. Nhưng đừng để một trải nghiệm đau lòng định nghĩa mọi điều có thể xảy đến sau này." },
      career: { upright: "Một nguồn cảm hứng mới, có thể đến từ một cuộc gặp, một cuốn sách, hay một khoảnh khắc bất ngờ, sẽ giúp bạn nhìn thấy hướng đi rõ ràng hơn trong công việc sau một giai đoạn mờ mịt.", reversed: "Sự mất phương hướng tạm thời có thể đang khiến bạn hoài nghi về con đường mình đã chọn. Hãy cho mình thời gian, sự rõ ràng thường không đến ngay lập tức mà đến từ từ." },
      money: { upright: "Một tia hy vọng mới cho tình hình tài chính đang dần xuất hiện, có thể nhỏ thôi, nhưng đủ để cho bạn thấy mọi thứ đang đi đúng hướng trở lại.", reversed: "Đừng để sự thất vọng từ một khó khăn tài chính trước đó làm bạn mất niềm tin vào khả năng cải thiện của chính mình — mọi giai đoạn khó khăn đều có điểm kết thúc." },
      health: { upright: "Quá trình chữa lành và hồi phục đang diễn ra tích cực, dù có thể chậm hơn bạn mong — hãy giữ vững niềm tin và kiên nhẫn với chính cơ thể mình.", reversed: "Bạn có thể đang cảm thấy kiệt sức hoặc mất hy vọng vào quá trình hồi phục vì nó diễn ra chậm hơn dự tính. Sự hồi phục thật sự hiếm khi đi theo một đường thẳng." },
      study: { upright: "Cảm hứng học tập đang trở lại sau một giai đoạn chán nản — đây là lúc tốt để theo đuổi điều bạn thật sự yêu thích, thay vì chỉ học vì bắt buộc.", reversed: "Sự mất động lực tạm thời có thể khiến bạn hoài nghi về khả năng của chính mình. Hãy nhớ lại lý do ban đầu khiến bạn bắt đầu, nó vẫn còn đó." },
      general: { upright: "Hôm nay hãy giữ vững niềm tin — những điều tốt đẹp đang dần quay trở lại, dù có thể chưa thấy ngay trước mắt.", reversed: "Nếu cảm thấy mất phương hướng hôm nay, hãy cho phép mình nghỉ ngơi và tìm lại niềm tin — không cần phải vội vàng có ngay câu trả lời." }
    },
    icon: "star"
  },
  {
    id: "moon", number: 18, numeral: "XVIII",
    nameVi: "Mặt Trăng", nameTraditional: "The Moon",
    keywords: ["trực giác", "mơ hồ", "cảm xúc", "ảo ảnh"],
    general: {
      upright: "Dưới ánh trăng, mọi thứ trông khác hẳn so với ban ngày — những hình dáng quen thuộc bỗng trở nên mơ hồ, đáng ngờ, đầy ảo ảnh. Cảm xúc và trực giác đang dẫn dắt bạn qua một giai đoạn còn nhiều điều chưa rõ ràng, nơi lý trí thông thường không đủ để soi sáng mọi góc tối. Hãy đi chậm, tin vào cảm nhận của mình, nhưng cũng đừng vội tin mọi nỗi sợ là sự thật.",
      reversed: "Sự nhầm lẫn hoặc lo lắng thái quá có thể đang khiến bạn khó phân biệt điều gì là thật, điều gì chỉ là tưởng tượng của chính mình trong những giờ đêm dài. Hãy chờ ánh sáng ban ngày trước khi kết luận điều gì chắc chắn."
    },
    topics: {
      love: { upright: "Cảm xúc trong mối quan hệ có thể đang phức tạp, mơ hồ, khó gọi tên — hãy cho nhau thời gian để hiểu rõ hơn, đừng vội ép mọi thứ phải rõ ràng ngay lúc này.", reversed: "Sự hiểu lầm hoặc thiếu rõ ràng trong giao tiếp có thể đang gây lo lắng không cần thiết. Một cuộc nói chuyện thẳng thắn, dưới ánh sáng ban ngày theo nghĩa đen, có thể giải tỏa nhiều hơn bạn nghĩ." },
      career: { upright: "Một tình huống công việc chưa rõ ràng cần thêm thời gian để sáng tỏ — đừng vội kết luận hay phản ứng khi thông tin vẫn còn mơ hồ, nửa vời.", reversed: "Sự lo lắng thái quá về những điều chưa chắc chắn có thể đang ảnh hưởng đến quyết định của bạn nhiều hơn là tình huống thực tế đáng lo. Hãy tách cảm giác sợ ra khỏi sự thật." },
      money: { upright: "Tình hình tài chính có thể còn mơ hồ, chưa rõ ràng hoàn toàn — hãy thận trọng trước khi đưa ra quyết định lớn khi bạn chưa nắm hết thông tin cần thiết.", reversed: "Đừng để sự lo lắng thái quá về tiền bạc dẫn đến những quyết định thiếu sáng suốt được đưa ra trong cơn hoảng loạn. Hãy chờ đến khi đầu óc bình tĩnh hơn." },
      health: { upright: "Hãy chú ý đến những cảm xúc tiềm ẩn — lo âu, bất an không rõ nguyên do — có thể đang ảnh hưởng đến sức khỏe tinh thần của bạn nhiều hơn bạn nhận ra.", reversed: "Sự lo âu hoặc mất ngủ kéo dài có thể đang ảnh hưởng đến bạn nhiều hơn bạn nghĩ — đừng ngại tìm sự hỗ trợ nếu cảm giác này không tự thuyên giảm." },
      study: { upright: "Trực giác có thể giúp bạn đoán đúng hướng đi cho một bài học hay đề thi, nhưng đừng quên kiểm chứng lại bằng kiến thức thật trước khi hoàn toàn tin vào nó.", reversed: "Sự hoang mang hoặc thiếu tự tin có thể đang khiến bạn khó tập trung học tập, nghi ngờ chính những điều mình đã từng nắm chắc." },
      general: { upright: "Hôm nay có thể có những điều chưa rõ ràng — hãy tin vào trực giác nhưng đừng vội kết luận khi mọi thứ vẫn còn trong bóng tối.", reversed: "Đừng để lo lắng thái quá chi phối cảm xúc của bạn trong ngày hôm nay — không phải mọi nỗi sợ trong đêm đều còn đáng sợ vào sáng hôm sau." }
    },
    icon: "moon"
  },
  {
    id: "sun", number: 19, numeral: "XIX",
    nameVi: "Mặt Trời", nameTraditional: "The Sun",
    keywords: ["thành công", "niềm vui", "sức sống", "lạc quan"],
    general: {
      upright: "Mặt Trời chiếu sáng rực rỡ trên đầu một đứa trẻ cưỡi ngựa trắng, không lo âu, không phòng vệ — chỉ có niềm vui thuần khiết của việc được sống. Thành công, niềm vui và năng lượng tích cực đang chiếu sáng con đường của bạn, và đây là lúc để tận hưởng nó một cách trọn vẹn, không cần phải dè chừng hay chờ đợi điều gì xấu xảy đến.",
      reversed: "Sự lạc quan thái quá, hoặc những kỳ vọng chưa thực tế, có thể khiến bạn thất vọng khi mọi thứ không diễn ra hoàn hảo như tưởng tượng. Ánh sáng vẫn ở đó, chỉ là bạn cần nhìn nó với một góc nhìn thực tế hơn."
    },
    topics: {
      love: { upright: "Hạnh phúc và sự ấm áp tràn đầy trong mối quan hệ của bạn lúc này — đây là giai đoạn rất tích cực để yêu một cách cởi mở, không cần phải giữ lại điều gì.", reversed: "Mối quan hệ có thể đang thiếu chân thực, hoặc một bên đang che giấu cảm xúc thật sau một lớp vỏ vui vẻ. Hãy chắc chắn rằng sự hạnh phúc bạn thấy là thật, không chỉ là vẻ ngoài." },
      career: { upright: "Thành công và sự công nhận trong công việc đang đến với bạn, cùng với một nguồn năng lượng làm việc dồi dào hiếm có. Hãy tận dụng giai đoạn rực rỡ này.", reversed: "Bạn có thể đang quá tự tin hoặc đánh giá thấp những khó khăn sắp tới trong công việc. Sự lạc quan là tốt, nhưng đừng để nó che mờ sự chuẩn bị cần thiết." },
      money: { upright: "Tài chính khởi sắc rõ rệt — đây là một giai đoạn thuận lợi để phát triển, đầu tư hoặc mở rộng những gì bạn đã xây dựng từ trước.", reversed: "Đừng quá lạc quan về tiền bạc đến mức bỏ qua việc kiểm tra kỹ trước khi chi tiêu hoặc đầu tư lớn — sự hứng khởi không nên thay thế sự cẩn trọng." },
      health: { upright: "Sức khỏe tràn đầy năng lượng, tinh thần phấn chấn và tích cực — đây là thời điểm cơ thể và tâm trí bạn đang ở trạng thái tốt nhất.", reversed: "Có thể bạn đang bỏ qua một dấu hiệu mệt mỏi nhỏ vì quá lạc quan về thể trạng của mình. Đừng để niềm vui che mất những gì cơ thể đang thật sự cần." },
      study: { upright: "Kết quả học tập tích cực, tinh thần minh mẫn và tự tin khi thi cử — đây là giai đoạn thuận lợi để thể hiện hết những gì bạn đã chuẩn bị.", reversed: "Sự tự tin thái quá có thể khiến bạn chủ quan, lơ là việc ôn luyện vì nghĩ rằng mọi thứ sẽ tự nhiên ổn. Đừng để sự lạc quan thay cho sự chuẩn bị." },
      general: { upright: "Một ngày tươi sáng, tràn đầy năng lượng tích cực và những niềm vui nhỏ bé — hãy tận hưởng nó mà không cần lý do gì cả.", reversed: "Đừng để sự lạc quan che mờ những chi tiết quan trọng hôm nay — niềm vui và sự cẩn trọng vẫn có thể song hành." }
    },
    icon: "sun"
  },
  {
    id: "judgement", number: 20, numeral: "XX",
    nameVi: "Sự Phán Xét", nameTraditional: "Judgement",
    keywords: ["thức tỉnh", "tái sinh", "đánh giá lại", "lời gọi"],
    general: {
      upright: "Tiếng kèn của thiên thần vang lên, và những người đã yên nghỉ bừng tỉnh, đứng lên từ nấm mộ của chính mình — đây là khoảnh khắc thức tỉnh, nhìn lại toàn bộ những gì đã qua bằng một sự thấu suốt mới. Một sự nhìn nhận lại bản thân đang giúp bạn bước vào một giai đoạn mới rõ ràng hơn, như thể bạn vừa nghe được một lời gọi mà trước đây mình chưa đủ tỉnh táo để lắng nghe.",
      reversed: "Sự tự trách quá mức, hoặc việc né tránh nhìn nhận lại bản thân vì sợ những gì sẽ thấy, có thể đang cản trở quá trình thức tỉnh cần thiết. Bạn không cần phải hoàn hảo để được tha thứ cho chính mình — chỉ cần thành thật."
    },
    topics: {
      love: { upright: "Một sự thấu hiểu sâu sắc hơn về bản thân đang giúp bạn nhìn rõ điều mình thật sự cần trong tình cảm, có thể khác hẳn những gì bạn từng nghĩ mình muốn trước đây.", reversed: "Bạn có thể đang quá khắt khe khi đánh giá lại một mối quan hệ trong quá khứ, nhìn nó qua lăng kính của hiện tại mà quên rằng lúc đó bạn đã làm hết khả năng mình có." },
      career: { upright: "Đây là thời điểm để nhìn lại toàn bộ hành trình sự nghiệp của mình và đưa ra một quyết định quan trọng cho bước tiếp theo — dựa trên những gì bạn đã học được, không phải những gì người khác mong đợi.", reversed: "Sự do dự hoặc tự nghi ngờ có thể đang khiến bạn chậm đưa ra một quyết định cần thiết về hướng đi sự nghiệp. Đôi khi chỉ cần một bước nhỏ để bắt đầu nhìn rõ hơn." },
      money: { upright: "Một sự nhìn nhận lại toàn diện về tài chính — thu nhập, chi tiêu, mục tiêu dài hạn — sẽ giúp bạn đưa ra hướng đi đúng đắn hơn cho giai đoạn tiếp theo.", reversed: "Đừng quá tự trách về những quyết định tài chính trong quá khứ — hãy xem chúng là bài học và tập trung vào những gì bạn có thể làm tốt hơn từ hôm nay." },
      health: { upright: "Một sự thức tỉnh về lối sống — nhận ra rõ điều gì đang thật sự tốt hoặc không tốt cho cơ thể mình — sẽ giúp bạn đưa ra những thay đổi tích cực và lâu dài.", reversed: "Sự tự trách về những thói quen cũ có thể đang khiến bạn thêm áp lực không cần thiết. Sự thay đổi bền vững đến từ sự tử tế với bản thân, không phải từ tội lỗi." },
      study: { upright: "Nhìn lại toàn bộ quá trình học tập của mình sẽ giúp bạn nhận ra rõ điều cần cải thiện cho giai đoạn tới, thay vì chỉ chú trọng vào kết quả trước mắt.", reversed: "Đừng quá khắt khe với những kết quả chưa tốt trong quá khứ — hãy xem đó là bài học cho thấy bạn cần điều chỉnh ở đâu, không phải bằng chứng cho thấy bạn kém cỏi." },
      general: { upright: "Hôm nay là lúc để nhìn lại bản thân một cách chân thực và chuẩn bị cho một khởi đầu mới — không phán xét, chỉ là nhìn rõ để bước tiếp tốt hơn.", reversed: "Hãy nhẹ nhàng hơn với bản thân khi nhìn lại những điều chưa hoàn hảo trong quá khứ — bạn đã làm tốt nhất có thể với những gì mình biết vào lúc đó." }
    },
    icon: "judgement"
  },
  {
    id: "world", number: 21, numeral: "XXI",
    nameVi: "Thế Giới", nameTraditional: "The World",
    keywords: ["hoàn thành", "viên mãn", "thành tựu", "trọn vẹn"],
    general: {
      upright: "Hình ảnh người vũ công nhẹ nhàng xoay mình giữa vòng nguyệt quế, được bao quanh bởi bốn nguyên tố của vũ trụ — đây là khoảnh khắc một chu kỳ lớn được hoàn thành trọn vẹn. Mọi nỗ lực, mọi bài học, mọi bước đi từ chặng đường đã qua đều đang hội tụ lại thành một cảm giác thành tựu và viên mãn. Hãy dừng lại để thật sự ăn mừng, trước khi vòng xoay mới của cuộc đời lại bắt đầu.",
      reversed: "Một điều gì đó vẫn còn chưa hoàn thiện, hoặc bạn cảm thấy chưa đạt được cảm giác trọn vẹn mong muốn dù đã đi được một quãng đường dài. Có thể chỉ còn thiếu một bước cuối cùng — đừng bỏ cuộc ngay trước đích."
    },
    topics: {
      love: { upright: "Một mối quan hệ đang đạt đến sự hài hòa, trọn vẹn và viên mãn — cả hai đã cùng nhau đi qua nhiều thử thách để đến được điểm này. Hãy trân trọng những gì đã cùng xây dựng.", reversed: "Bạn có thể đang cảm thấy thiếu một điều gì đó để mối quan hệ thật sự trọn vẹn, dù không hẳn là điều gì sai. Hãy thử trò chuyện cùng nhau để tìm ra điều còn thiếu đó là gì." },
      career: { upright: "Một dự án hoặc giai đoạn công việc quan trọng đang đi đến thành công trọn vẹn — đây là kết quả của một quá trình dài, không phải may mắn nhất thời.", reversed: "Bạn có thể đang gần đạt được mục tiêu nhưng còn thiếu một bước cuối cùng để hoàn thiện. Đừng dừng lại ngay trước khi chạm tới đích." },
      money: { upright: "Tài chính đạt đến một cột mốc viên mãn nhờ những nỗ lực bền bỉ trước đó — đây là lúc để nhìn lại và tự hào về quãng đường mình đã đi qua.", reversed: "Một mục tiêu tài chính có thể đang gần hoàn thành nhưng cần thêm một chút kiên trì nữa — đừng nản lòng khi đã đi được phần lớn quãng đường." },
      health: { upright: "Sức khỏe đạt đến trạng thái cân bằng và viên mãn nhờ quá trình chăm sóc bền bỉ, kiên trì theo thời gian, không phải nhờ một phép màu nhanh chóng.", reversed: "Bạn có thể đang gần đạt được mục tiêu sức khỏe nhưng cần thêm thời gian kiên trì — những thay đổi thật sự bền vững luôn cần nhiều thời gian hơn ta tưởng." },
      study: { upright: "Một giai đoạn học tập quan trọng đang hoàn thành tốt đẹp, ghi nhận xứng đáng cho tất cả nỗ lực bạn đã bỏ ra suốt một quá trình dài.", reversed: "Bạn đang gần hoàn thành mục tiêu học tập nhưng đừng từ bỏ ở những bước cuối cùng — chặng đường khó nhất thường là chặng cuối trước khi về đích." },
      general: { upright: "Hôm nay đánh dấu một sự hoàn thành trọn vẹn — hãy tự hào về hành trình của mình, dù không phải mọi bước đi đều dễ dàng.", reversed: "Một điều gì đó vẫn còn dang dở hôm nay — hãy kiên trì thêm một chút nữa, đích đến có thể gần hơn bạn nghĩ." }
    },
    icon: "world"
  }
];

function getCardById(cardId) {
  return TAROT_CARDS.find(function (c) { return c.id === cardId; }) || null;
}
