const TAROT_CARDS = [
  {
    id: "fool", number: 0, numeral: "0",
    nameVi: "Kẻ Khờ", nameTraditional: "The Fool",
    keywords: ["khởi đầu mới", "tự do", "ngây thơ", "mạo hiểm"],
    general: {
      upright: "Một khởi đầu mới đầy hứng khởi đang mở ra. Hãy tin vào hành trình, dù chưa biết hết mọi điều.",
      reversed: "Sự bốc đồng hoặc thiếu chuẩn bị có thể khiến bạn lạc lối. Nên dừng lại và suy nghĩ kỹ trước khi hành động."
    },
    topics: {
      love: { upright: "Một mối quan hệ mới hoặc một giai đoạn yêu đương tự do, vô tư có thể bắt đầu. Hãy mở lòng đón nhận.", reversed: "Bạn có thể đang yêu một cách thiếu suy nghĩ hoặc ngại cam kết. Cẩn trọng với những quyết định vội vàng." },
      career: { upright: "Cơ hội nghề nghiệp mới xuất hiện, phù hợp để thử sức ở lĩnh vực chưa từng làm.", reversed: "Có thể bạn đang hành động thiếu kế hoạch trong công việc, dễ dẫn đến rủi ro không đáng có." },
      money: { upright: "Một khởi đầu tài chính mới, có thể là nguồn thu nhập hoặc cơ hội đầu tư chưa từng nghĩ tới.", reversed: "Chi tiêu bốc đồng hoặc quyết định tài chính thiếu cân nhắc có thể gây thiệt hại." },
      health: { upright: "Một khởi đầu mới cho lối sống lành mạnh, năng lượng tích cực và tinh thần tươi mới.", reversed: "Bạn có thể đang lơ là sức khỏe hoặc hành động bất cẩn. Hãy chú ý hơn đến cơ thể mình." },
      study: { upright: "Một môn học, kỳ thi hoặc lĩnh vực kiến thức mới đầy thú vị đang chờ bạn khám phá.", reversed: "Thiếu tập trung hoặc chuẩn bị sơ sài có thể ảnh hưởng đến kết quả học tập." },
      general: { upright: "Hôm nay là ngày tốt để bắt đầu điều gì đó mới với tinh thần cởi mở và lạc quan.", reversed: "Hãy cẩn trọng hơn với những quyết định bốc đồng trong ngày hôm nay." }
    },
    icon: "fool"
  },
  {
    id: "magician", number: 1, numeral: "I",
    nameVi: "Pháp Sư", nameTraditional: "The Magician",
    keywords: ["sáng tạo", "hành động", "ý chí", "kỹ năng"],
    general: {
      upright: "Bạn có đầy đủ công cụ và năng lực để biến ý tưởng thành hiện thực — hãy chủ động bắt tay vào hành động.",
      reversed: "Năng lực chưa được sử dụng đúng cách, hoặc bạn đang thao túng/lừa dối bản thân và người khác."
    },
    topics: {
      love: { upright: "Bạn đủ tự tin và chủ động để bắt đầu hoặc làm mới một mối quan hệ theo cách bạn muốn.", reversed: "Có thể một trong hai người đang thiếu chân thành hoặc lợi dụng tình cảm của đối phương." },
      career: { upright: "Đây là thời điểm tốt để thể hiện kỹ năng, đề xuất ý tưởng mới và chủ động dẫn dắt công việc.", reversed: "Bạn có thể đang thiếu tự tin hoặc dùng sai cách để đạt được điều mình muốn trong công việc." },
      money: { upright: "Bạn có khả năng tạo ra nguồn thu nhập mới nhờ sự sáng tạo và chủ động của mình.", reversed: "Cẩn thận với những chiêu trò tài chính thiếu minh bạch hoặc quyết định đầu tư vội vàng." },
      health: { upright: "Bạn có đủ ý chí và nguồn lực để chủ động cải thiện sức khỏe ngay từ hôm nay.", reversed: "Đừng cố gắng quá sức hoặc áp dụng phương pháp chưa được kiểm chứng." },
      study: { upright: "Bạn nắm vững kiến thức và kỹ năng cần thiết để đạt kết quả tốt trong học tập.", reversed: "Sự tự tin thái quá có thể khiến bạn chủ quan, bỏ qua những lỗi nhỏ quan trọng." },
      general: { upright: "Hôm nay bạn có đủ năng lực để chủ động tạo ra điều mình mong muốn.", reversed: "Hãy xem lại liệu mình có đang dùng năng lực của mình đúng hướng không." }
    },
    icon: "magician"
  },
  {
    id: "priestess", number: 2, numeral: "II",
    nameVi: "Nữ Tư Tế", nameTraditional: "The High Priestess",
    keywords: ["trực giác", "bí ẩn", "tiềm thức", "tĩnh lặng"],
    general: {
      upright: "Hãy tin vào trực giác và sự tĩnh lặng bên trong — câu trả lời bạn cần đã có sẵn trong bạn.",
      reversed: "Bạn đang xa rời trực giác của mình, hoặc có điều gì đó đang bị che giấu, chưa rõ ràng."
    },
    topics: {
      love: { upright: "Hãy lắng nghe cảm xúc thật của mình trước khi đưa ra quyết định trong tình cảm.", reversed: "Có những điều chưa được nói ra hoặc cảm xúc thật đang bị che giấu giữa hai người." },
      career: { upright: "Trực giác sẽ giúp bạn đưa ra lựa chọn đúng đắn hơn là chỉ dựa vào lý lẽ trong công việc.", reversed: "Bạn có thể đang bỏ qua những dấu hiệu quan trọng vì quá vội vàng hoặc thiếu kết nối nội tâm." },
      money: { upright: "Một quyết định tài chính nên dựa vào cảm nhận sâu sắc, không chỉ vào số liệu bề ngoài.", reversed: "Đừng bỏ qua cảm giác bất an về một khoản chi tiêu hay đầu tư nào đó." },
      health: { upright: "Cơ thể đang gửi cho bạn những tín hiệu tinh tế — hãy chú ý lắng nghe nó.", reversed: "Bạn có thể đang phớt lờ những dấu hiệu bất thường của cơ thể hoặc tâm lý." },
      study: { upright: "Sự tĩnh tâm và khả năng tự học sẽ giúp bạn hiểu sâu vấn đề hơn là học vội vàng.", reversed: "Tâm trí xao động có thể khiến bạn khó tiếp thu hoặc ghi nhớ kiến thức." },
      general: { upright: "Một ngày phù hợp để tĩnh lại, lắng nghe bản thân nhiều hơn là hành động.", reversed: "Đừng để những suy nghĩ rối loạn che mờ trực giác của bạn hôm nay." }
    },
    icon: "priestess"
  },
  {
    id: "empress", number: 3, numeral: "III",
    nameVi: "Hoàng Hậu", nameTraditional: "The Empress",
    keywords: ["sung túc", "nuôi dưỡng", "sáng tạo", "thiên nhiên"],
    general: {
      upright: "Sự sung túc, ấm áp và khả năng nuôi dưỡng đang nở rộ trong cuộc sống của bạn.",
      reversed: "Sự mất cân bằng, phụ thuộc quá mức hoặc thiếu quan tâm đến bản thân đang diễn ra."
    },
    topics: {
      love: { upright: "Tình cảm ấm áp, nồng nhiệt và đầy sự quan tâm chân thành dành cho nhau.", reversed: "Một bên có thể đang cho đi quá nhiều hoặc cảm thấy không được trân trọng đúng mức." },
      career: { upright: "Công việc phát triển thuận lợi nhờ sự chăm chút, kiên nhẫn và óc sáng tạo của bạn.", reversed: "Bạn có thể đang xao nhãng công việc hoặc thiếu sự đầu tư cần thiết cho nó." },
      money: { upright: "Tài chính sung túc, dư dả, là thời điểm tốt để tận hưởng thành quả đã gây dựng.", reversed: "Chi tiêu quá tay hoặc thiếu kế hoạch có thể ảnh hưởng đến sự ổn định tài chính." },
      health: { upright: "Cơ thể tràn đầy sức sống, đây là thời điểm tốt để chăm sóc bản thân nhiều hơn.", reversed: "Bạn có thể đang bỏ quên việc chăm sóc bản thân vì lo cho người khác quá nhiều." },
      study: { upright: "Khả năng tiếp thu tốt, đặc biệt với những kiến thức cần sự kiên trì và tỉ mỉ.", reversed: "Sự trì trệ hoặc thiếu động lực có thể khiến việc học chậm tiến độ." },
      general: { upright: "Một ngày tràn đầy năng lượng nuôi dưỡng, thích hợp để chăm sóc bản thân và người thân.", reversed: "Đừng quên dành thời gian cho chính mình giữa những bận rộn hôm nay." }
    },
    icon: "empress"
  },
  {
    id: "emperor", number: 4, numeral: "IV",
    nameVi: "Hoàng Đế", nameTraditional: "The Emperor",
    keywords: ["kỷ luật", "ổn định", "quyền lực", "cấu trúc"],
    general: {
      upright: "Sự ổn định, kỷ luật và khả năng kiểm soát tình huống đang giúp bạn xây dựng nền tảng vững chắc.",
      reversed: "Sự cứng nhắc hoặc kiểm soát quá mức có thể đang gây áp lực không cần thiết."
    },
    topics: {
      love: { upright: "Một mối quan hệ ổn định, có cấu trúc rõ ràng và cảm giác an toàn, được bảo vệ.", reversed: "Sự kiểm soát hoặc áp đặt quá mức có thể đang làm đối phương cảm thấy ngột ngạt." },
      career: { upright: "Khả năng lãnh đạo và tổ chức của bạn được phát huy tốt, công việc đi vào quy củ.", reversed: "Sự cứng nhắc trong cách quản lý có thể đang cản trở sự linh hoạt cần thiết." },
      money: { upright: "Tài chính được quản lý chặt chẽ, có kế hoạch rõ ràng và đang dần ổn định.", reversed: "Quá thận trọng hoặc kiểm soát chi tiêu cứng nhắc có thể khiến bạn bỏ lỡ cơ hội tốt." },
      health: { upright: "Một lối sống có kỷ luật, điều độ sẽ giúp sức khỏe của bạn ổn định lâu dài.", reversed: "Áp lực tự đặt ra cho bản thân quá lớn có thể đang ảnh hưởng đến sức khỏe." },
      study: { upright: "Một lịch học có kế hoạch, kỷ luật sẽ giúp bạn đạt kết quả tốt và bền vững.", reversed: "Quá áp đặt khuôn khổ cho bản thân có thể khiến việc học trở nên căng thẳng, kém hiệu quả." },
      general: { upright: "Hôm nay phù hợp để thiết lập kỷ luật và kế hoạch rõ ràng cho những việc quan trọng.", reversed: "Hãy linh hoạt hơn một chút, đừng quá cứng nhắc với chính mình hôm nay." }
    },
    icon: "emperor"
  },
  {
    id: "hierophant", number: 5, numeral: "V",
    nameVi: "Giáo Hoàng", nameTraditional: "The Hierophant",
    keywords: ["truyền thống", "quy tắc", "niềm tin", "cố vấn"],
    general: {
      upright: "Những giá trị truyền thống, quy tắc hoặc sự hướng dẫn từ người có kinh nghiệm sẽ giúp ích cho bạn.",
      reversed: "Bạn có thể đang cảm thấy bó buộc bởi quy tắc cũ hoặc muốn đi theo con đường riêng của mình."
    },
    topics: {
      love: { upright: "Một mối quan hệ được xây dựng trên giá trị chung, sự cam kết và chuẩn mực rõ ràng.", reversed: "Bạn hoặc đối phương có thể đang cảm thấy ngột ngạt bởi những khuôn mẫu, kỳ vọng cũ." },
      career: { upright: "Lời khuyên từ người đi trước hoặc việc tuân theo quy trình sẽ giúp công việc thuận lợi hơn.", reversed: "Quy trình cứng nhắc hoặc tư duy lối mòn có thể đang cản trở sự đổi mới của bạn." },
      money: { upright: "Tuân theo những nguyên tắc tài chính truyền thống, an toàn sẽ mang lại sự ổn định.", reversed: "Đừng quá phụ thuộc vào những lời khuyên cũ nếu nó không còn phù hợp với hoàn cảnh hiện tại." },
      health: { upright: "Những phương pháp chăm sóc sức khỏe đã được kiểm chứng theo thời gian sẽ phù hợp với bạn lúc này.", reversed: "Một phương pháp cũ có thể không còn phù hợp — hãy cân nhắc tìm hướng đi mới." },
      study: { upright: "Học theo phương pháp truyền thống, có hệ thống sẽ giúp bạn tiếp thu tốt hơn.", reversed: "Đừng ngại đặt câu hỏi hoặc tìm cách học khác nếu cách cũ không còn hiệu quả." },
      general: { upright: "Hôm nay là ngày tốt để tìm đến lời khuyên từ người có kinh nghiệm hoặc giữ vững giá trị cốt lõi của mình.", reversed: "Đừng để những khuôn mẫu cũ ngăn bạn thử một cách tiếp cận mới hôm nay." }
    },
    icon: "hierophant"
  },
  {
    id: "lovers", number: 6, numeral: "VI",
    nameVi: "Tình Nhân", nameTraditional: "The Lovers",
    keywords: ["kết nối", "lựa chọn", "hài hòa", "tình yêu"],
    general: {
      upright: "Một sự kết nối sâu sắc, hài hòa hoặc một lựa chọn quan trọng dựa trên giá trị thật của bạn.",
      reversed: "Sự mất cân bằng trong quan hệ hoặc một lựa chọn khó khăn đang khiến bạn phân tâm."
    },
    topics: {
      love: { upright: "Một kết nối sâu sắc, chân thành — tình cảm hài hòa và tôn trọng lẫn nhau.", reversed: "Sự mất kết nối, hiểu lầm hoặc một lựa chọn khó khăn giữa hai hướng đi đang xuất hiện." },
      career: { upright: "Sự hợp tác ăn ý với đồng nghiệp hoặc đối tác sẽ mang lại kết quả tốt.", reversed: "Mâu thuẫn quan điểm hoặc thiếu ăn ý trong nhóm có thể đang ảnh hưởng đến công việc." },
      money: { upright: "Một quyết định tài chính chung (hợp tác, chia sẻ) diễn ra thuận lợi nếu dựa trên sự tin tưởng.", reversed: "Bất đồng về tiền bạc với người khác có thể cần được trao đổi thẳng thắn hơn." },
      health: { upright: "Sự hài hòa giữa thể chất và tinh thần đang giúp bạn cảm thấy khỏe mạnh, cân bằng.", reversed: "Mất cân bằng giữa các khía cạnh trong cuộc sống có thể đang ảnh hưởng đến sức khỏe của bạn." },
      study: { upright: "Học nhóm hoặc trao đổi với người cùng chí hướng sẽ mang lại hiệu quả bất ngờ.", reversed: "Sự phân tâm giữa nhiều lựa chọn có thể khiến bạn khó tập trung vào việc học." },
      general: { upright: "Một ngày thuận lợi cho các kết nối ý nghĩa và những lựa chọn xuất phát từ trái tim.", reversed: "Hôm nay bạn có thể cần đưa ra một lựa chọn khó — hãy cân nhắc kỹ điều gì thật sự quan trọng." }
    },
    icon: "lovers"
  },
  {
    id: "chariot", number: 7, numeral: "VII",
    nameVi: "Cỗ Xe", nameTraditional: "The Chariot",
    keywords: ["ý chí", "chiến thắng", "kiểm soát", "quyết tâm"],
    general: {
      upright: "Ý chí mạnh mẽ và sự quyết tâm đang giúp bạn tiến về phía trước và giành chiến thắng.",
      reversed: "Bạn có thể đang mất kiểm soát hoặc thiếu định hướng rõ ràng trên con đường của mình."
    },
    topics: {
      love: { upright: "Bạn đang chủ động dẫn dắt mối quan hệ theo đúng hướng mình mong muốn.", reversed: "Sự giằng co giữa hai hướng đi khác nhau có thể khiến mối quan hệ thiếu ổn định." },
      career: { upright: "Quyết tâm và sự tập trung sẽ giúp bạn vượt qua thử thách và đạt được mục tiêu công việc.", reversed: "Thiếu định hướng rõ ràng có thể khiến bạn loay hoay, mất nhiều công sức mà chưa hiệu quả." },
      money: { upright: "Sự quyết đoán trong kế hoạch tài chính sẽ giúp bạn đạt được mục tiêu đã đề ra.", reversed: "Đừng đưa ra quyết định tài chính khi cảm thấy thiếu kiểm soát hoặc quá vội vàng." },
      health: { upright: "Quyết tâm theo đuổi một mục tiêu sức khỏe cụ thể sẽ mang lại kết quả rõ rệt.", reversed: "Cơ thể có thể đang mất cân bằng vì bạn cố gắng kiểm soát quá nhiều thứ cùng lúc." },
      study: { upright: "Sự tập trung cao độ và quyết tâm sẽ giúp bạn vượt qua kỳ thi hoặc môn học khó.", reversed: "Tâm trí phân tán có thể khiến bạn khó duy trì động lực học tập lâu dài." },
      general: { upright: "Hôm nay là ngày để tiến về phía trước với quyết tâm và sự tự tin.", reversed: "Hãy chậm lại một chút nếu bạn cảm thấy mọi thứ đang vượt khỏi tầm kiểm soát." }
    },
    icon: "chariot"
  },
  {
    id: "strength", number: 8, numeral: "VIII",
    nameVi: "Sức Mạnh", nameTraditional: "Strength",
    keywords: ["can đảm", "kiên nhẫn", "nội lực", "dịu dàng nhưng kiên định"],
    general: {
      upright: "Sức mạnh nội tâm, sự kiên nhẫn và lòng can đảm dịu dàng đang giúp bạn vượt qua khó khăn.",
      reversed: "Sự tự nghi ngờ hoặc mất kiên nhẫn với bản thân có thể đang khiến bạn yếu lòng."
    },
    topics: {
      love: { upright: "Sự kiên nhẫn và dịu dàng sẽ giúp hàn gắn hoặc củng cố mối quan hệ của bạn.", reversed: "Bạn có thể đang mất kiên nhẫn hoặc nghi ngờ khả năng duy trì mối quan hệ này." },
      career: { upright: "Lòng kiên trì và sự bình tĩnh sẽ giúp bạn xử lý khéo léo những tình huống khó trong công việc.", reversed: "Áp lực công việc có thể khiến bạn cảm thấy đuối sức hoặc thiếu tự tin vào năng lực bản thân." },
      money: { upright: "Sự kiên nhẫn trong việc quản lý tài chính sẽ mang lại kết quả bền vững theo thời gian.", reversed: "Đừng để sự lo lắng về tiền bạc làm bạn mất bình tĩnh và đưa ra quyết định sai lầm." },
      health: { upright: "Nội lực và sự kiên trì sẽ giúp bạn vượt qua giai đoạn khó khăn về sức khỏe.", reversed: "Bạn có thể đang cảm thấy kiệt sức hoặc thiếu động lực để chăm sóc bản thân." },
      study: { upright: "Sự kiên trì bền bỉ, từng bước nhỏ sẽ giúp bạn vượt qua môn học khó.", reversed: "Cảm giác nản lòng có thể khiến bạn dễ bỏ cuộc trước khi đạt được kết quả." },
      general: { upright: "Hôm nay hãy đối diện khó khăn bằng sự bình tĩnh, kiên nhẫn và dịu dàng với chính mình.", reversed: "Đừng quá khắc nghiệt với bản thân nếu mọi thứ chưa diễn ra như ý hôm nay." }
    },
    icon: "strength"
  },
  {
    id: "hermit", number: 9, numeral: "IX",
    nameVi: "Ẩn Sĩ", nameTraditional: "The Hermit",
    keywords: ["nội tâm", "cô độc", "chiêm nghiệm", "tìm kiếm sự thật"],
    general: {
      upright: "Đây là thời điểm phù hợp để lùi lại, tĩnh tâm và tìm câu trả lời từ chính nội tâm mình.",
      reversed: "Sự cô lập quá mức hoặc né tránh kết nối với người khác có thể khiến bạn thêm lạc lối."
    },
    topics: {
      love: { upright: "Bạn cần thời gian ở một mình để hiểu rõ điều mình thật sự mong muốn trong tình cảm.", reversed: "Sự xa cách hoặc thu mình lại quá mức có thể đang tạo khoảng cách với đối phương." },
      career: { upright: "Làm việc độc lập, tập trung sâu vào chuyên môn sẽ mang lại hiệu quả tốt lúc này.", reversed: "Sự cô lập với đồng nghiệp có thể khiến bạn bỏ lỡ những hỗ trợ cần thiết." },
      money: { upright: "Dành thời gian nhìn lại và lập kế hoạch tài chính một mình sẽ giúp bạn sáng suốt hơn.", reversed: "Đừng tự mình gánh hết áp lực tài chính — đôi khi cần hỏi ý kiến người khác." },
      health: { upright: "Thời gian tĩnh lặng, nghỉ ngơi một mình sẽ giúp bạn hồi phục năng lượng.", reversed: "Sự cô đơn kéo dài có thể đang ảnh hưởng đến tâm lý và sức khỏe tinh thần của bạn." },
      study: { upright: "Tự học, nghiên cứu sâu một mình sẽ giúp bạn hiểu vấn đề thấu đáo hơn.", reversed: "Đừng ngại hỏi người khác nếu tự học một mình khiến bạn bị bí hoặc lạc hướng." },
      general: { upright: "Một ngày phù hợp để ở một mình, suy ngẫm và lắng nghe chính mình.", reversed: "Hãy thử mở lòng kết nối với ai đó hôm nay, đừng thu mình quá lâu." }
    },
    icon: "hermit"
  },
  {
    id: "wheel", number: 10, numeral: "X",
    nameVi: "Vòng Xoay Số Phận", nameTraditional: "Wheel of Fortune",
    keywords: ["vận may", "chu kỳ", "thay đổi", "số phận"],
    general: {
      upright: "Một vòng xoay vận may đang đưa đến những thay đổi và cơ hội mới trong cuộc sống của bạn.",
      reversed: "Một giai đoạn không thuận lợi hoặc cảm giác mọi thứ ngoài tầm kiểm soát đang diễn ra."
    },
    topics: {
      love: { upright: "Một bước ngoặt bất ngờ nhưng tích cực có thể xảy đến với chuyện tình cảm của bạn.", reversed: "Những biến động ngoài ý muốn có thể đang khiến mối quan hệ trở nên bất ổn." },
      career: { upright: "Một cơ hội nghề nghiệp bất ngờ có thể xuất hiện — hãy sẵn sàng đón nhận nó.", reversed: "Sự trì trệ hoặc những thay đổi không mong muốn có thể đang ảnh hưởng đến công việc." },
      money: { upright: "Vận tài chính đang chuyển biến tích cực, có thể đến từ một nguồn bất ngờ.", reversed: "Biến động tài chính ngoài dự tính có thể khiến bạn cần điều chỉnh kế hoạch." },
      health: { upright: "Một sự thay đổi tích cực về thể chất hoặc tinh thần đang đến với bạn.", reversed: "Sức khỏe có thể đang biến động — hãy chú ý nhiều hơn đến những thay đổi của cơ thể." },
      study: { upright: "Một cơ hội học tập bất ngờ hoặc một bước ngoặt tốt trong kết quả học có thể xuất hiện.", reversed: "Kết quả học tập có thể không như mong đợi do những yếu tố ngoài tầm kiểm soát." },
      general: { upright: "Hôm nay vận may có thể nghiêng về phía bạn — hãy đón nhận những điều bất ngờ.", reversed: "Nếu mọi thứ chưa thuận lợi hôm nay, hãy nhớ rằng vòng xoay luôn tiếp tục chuyển động." }
    },
    icon: "wheel"
  },
  {
    id: "justice", number: 11, numeral: "XI",
    nameVi: "Công Lý", nameTraditional: "Justice",
    keywords: ["công bằng", "sự thật", "nhân quả", "quyết định"],
    general: {
      upright: "Sự công bằng, rõ ràng và đúng đắn đang được thiết lập — mọi việc đều có nhân quả của nó.",
      reversed: "Sự thiếu công bằng hoặc một quyết định chưa thỏa đáng có thể đang gây khó chịu cho bạn."
    },
    topics: {
      love: { upright: "Sự công bằng và thẳng thắn giữa hai người sẽ giúp mối quan hệ phát triển lành mạnh.", reversed: "Một bên có thể đang cảm thấy không được đối xử công bằng trong mối quan hệ." },
      career: { upright: "Sự nỗ lực của bạn sẽ được nhìn nhận và đánh giá công bằng trong thời gian tới.", reversed: "Bạn có thể đang cảm thấy bất công hoặc chưa được công nhận đúng mức ở nơi làm việc." },
      money: { upright: "Một quyết định tài chính công bằng, minh bạch sẽ mang lại kết quả tốt về lâu dài.", reversed: "Hãy kiểm tra kỹ các thỏa thuận tài chính để tránh những điều khoản thiếu công bằng." },
      health: { upright: "Sự cân bằng giữa nghỉ ngơi và làm việc sẽ giúp sức khỏe của bạn ổn định.", reversed: "Mất cân bằng trong lối sống có thể đang gây ra những hệ quả bạn chưa lường tới." },
      study: { upright: "Kết quả học tập sẽ phản ánh đúng những gì bạn đã nỗ lực bỏ ra.", reversed: "Hãy xem lại liệu phương pháp học của bạn đã thật sự công bằng với chính sức lực mình bỏ ra hay chưa." },
      general: { upright: "Hôm nay là ngày để đưa ra những quyết định công bằng, sáng suốt và có cân nhắc kỹ.", reversed: "Một điều gì đó có thể chưa diễn ra công bằng hôm nay — hãy bình tĩnh tìm hiểu rõ trước khi phản ứng." }
    },
    icon: "justice"
  },
  {
    id: "hanged", number: 12, numeral: "XII",
    nameVi: "Người Treo Ngược", nameTraditional: "The Hanged Man",
    keywords: ["buông bỏ", "góc nhìn mới", "tạm dừng", "hy sinh"],
    general: {
      upright: "Một khoảng dừng cần thiết giúp bạn nhìn vấn đề từ góc độ hoàn toàn mới.",
      reversed: "Sự trì hoãn kéo dài hoặc chống lại sự thay đổi cần thiết đang khiến bạn mắc kẹt."
    },
    topics: {
      love: { upright: "Thử nhìn mối quan hệ từ góc nhìn của đối phương có thể giúp bạn hiểu nhau hơn.", reversed: "Sự cố chấp không muốn thay đổi cách nhìn có thể đang khiến mối quan hệ bế tắc." },
      career: { upright: "Tạm dừng lại để nhìn nhận công việc từ góc độ khác có thể mở ra hướng giải quyết mới.", reversed: "Sự trì trệ kéo dài trong công việc có thể do bạn đang ngại thay đổi cách làm cũ." },
      money: { upright: "Tạm dừng các quyết định tài chính lớn để nhìn nhận lại tình hình một cách khách quan hơn.", reversed: "Sự chần chừ không dứt khoát có thể đang khiến cơ hội tài chính trôi qua." },
      health: { upright: "Một giai đoạn nghỉ ngơi, chậm lại sẽ giúp cơ thể và tâm trí được phục hồi.", reversed: "Việc trì hoãn chăm sóc sức khỏe có thể khiến tình trạng kéo dài lâu hơn cần thiết." },
      study: { upright: "Thử một phương pháp học khác, nhìn vấn đề theo cách mới có thể giúp bạn hiểu sâu hơn.", reversed: "Sự cố chấp với cách học cũ không hiệu quả có thể đang cản trở tiến bộ của bạn." },
      general: { upright: "Hôm nay hãy cho phép mình tạm dừng và nhìn mọi việc theo một góc độ khác.", reversed: "Đừng cố chấp giữ nguyên cách cũ nếu nó đang không còn hiệu quả với bạn." }
    },
    icon: "hanged"
  },
  {
    id: "death", number: 13, numeral: "XIII",
    nameVi: "Tử Thần", nameTraditional: "Death",
    keywords: ["kết thúc", "chuyển giao", "tái sinh", "buông bỏ"],
    general: {
      upright: "Một giai đoạn kết thúc để mở đường cho một khởi đầu mới hoàn toàn khác.",
      reversed: "Sự sợ hãi thay đổi hoặc cố bám giữ những gì đã không còn phù hợp đang kìm hãm bạn."
    },
    topics: {
      love: { upright: "Một chương cũ trong tình cảm đang khép lại để mở ra một giai đoạn mới phù hợp hơn.", reversed: "Sự níu kéo một mối quan hệ đã không còn phù hợp có thể đang khiến bạn tổn thương thêm." },
      career: { upright: "Một vai trò hoặc giai đoạn công việc cũ đang kết thúc, mở đường cho cơ hội mới.", reversed: "Sự sợ thay đổi có thể đang khiến bạn mắc kẹt trong một công việc không còn phù hợp." },
      money: { upright: "Đã đến lúc buông bỏ một khoản đầu tư hoặc thói quen chi tiêu không còn hiệu quả.", reversed: "Việc né tránh đối mặt với một vấn đề tài chính có thể khiến nó kéo dài lâu hơn." },
      health: { upright: "Một thói quen không lành mạnh cần được kết thúc để cơ thể bạn có cơ hội hồi phục.", reversed: "Sự chống lại thay đổi cần thiết trong lối sống có thể đang ảnh hưởng đến sức khỏe lâu dài." },
      study: { upright: "Đã đến lúc từ bỏ một phương pháp học không hiệu quả để bắt đầu cách tiếp cận mới.", reversed: "Sự níu giữ một cách học cũ dù không hiệu quả có thể đang làm bạn chậm tiến bộ." },
      general: { upright: "Hôm nay có thể là lúc để khép lại một điều gì đó và đón nhận sự khởi đầu mới.", reversed: "Đừng quá sợ hãi trước những thay đổi cần thiết đang đến với bạn." }
    },
    icon: "death"
  },
  {
    id: "temperance", number: 14, numeral: "XIV",
    nameVi: "Điều Độ", nameTraditional: "Temperance",
    keywords: ["cân bằng", "hòa hợp", "điều độ", "kiên nhẫn"],
    general: {
      upright: "Sự cân bằng, hòa hợp và điều độ đang giúp mọi thứ trong cuộc sống bạn diễn ra hài hòa.",
      reversed: "Sự mất cân bằng hoặc thái quá ở một khía cạnh nào đó đang gây xáo trộn cho bạn."
    },
    topics: {
      love: { upright: "Sự hòa hợp, thấu hiểu và kiên nhẫn đang giúp mối quan hệ của bạn trở nên bền vững hơn.", reversed: "Sự mất cân bằng giữa cho và nhận có thể đang khiến một bên cảm thấy thiệt thòi." },
      career: { upright: "Sự điều độ giữa công việc và nghỉ ngơi sẽ giúp bạn duy trì hiệu suất lâu dài.", reversed: "Làm việc quá sức hoặc thiếu cân bằng có thể đang khiến bạn dễ kiệt sức." },
      money: { upright: "Chi tiêu điều độ, có kế hoạch sẽ giúp tài chính của bạn duy trì sự ổn định.", reversed: "Sự mất cân bằng trong thu chi có thể đang khiến tài chính của bạn chao đảo." },
      health: { upright: "Một lối sống điều độ, cân bằng giữa vận động và nghỉ ngơi sẽ tốt cho sức khỏe của bạn.", reversed: "Sự thái quá ở một thói quen nào đó có thể đang ảnh hưởng đến cơ thể bạn." },
      study: { upright: "Phân bổ thời gian học tập và nghỉ ngơi hợp lý sẽ giúp bạn tiếp thu hiệu quả hơn.", reversed: "Học dồn hoặc mất cân bằng thời gian có thể khiến bạn dễ quá tải." },
      general: { upright: "Hôm nay hãy tìm kiếm sự cân bằng giữa các khía cạnh trong cuộc sống của bạn.", reversed: "Có điều gì đó trong ngày hôm nay đang mất cân bằng — hãy điều chỉnh lại một chút." }
    },
    icon: "temperance"
  },
  {
    id: "devil", number: 15, numeral: "XV",
    nameVi: "Ác Quỷ", nameTraditional: "The Devil",
    keywords: ["ràng buộc", "cám dỗ", "lệ thuộc", "mặt tối"],
    general: {
      upright: "Bạn có thể đang bị ràng buộc bởi một cám dỗ, thói quen hoặc nỗi sợ kìm hãm sự tự do của mình.",
      reversed: "Bạn đang dần thoát khỏi một ràng buộc hoặc nhận ra điều đang kìm hãm mình."
    },
    topics: {
      love: { upright: "Một mối quan hệ phụ thuộc hoặc thiếu lành mạnh có thể đang khiến bạn mất tự do là chính mình.", reversed: "Bạn đang dần nhận ra và thoát khỏi một sự ràng buộc không lành mạnh trong tình cảm." },
      career: { upright: "Áp lực công việc hoặc một thói quen tiêu cực có thể đang khiến bạn cảm thấy bị mắc kẹt.", reversed: "Bạn đang bắt đầu tìm cách thoát khỏi một môi trường làm việc gây ngột ngạt." },
      money: { upright: "Một thói quen chi tiêu hoặc nợ nần có thể đang ràng buộc sự tự do tài chính của bạn.", reversed: "Bạn đang dần kiểm soát lại và thoát khỏi một gánh nặng tài chính." },
      health: { upright: "Một thói quen không lành mạnh có thể đang âm thầm ảnh hưởng đến sức khỏe của bạn.", reversed: "Bạn đang có những bước tiến tích cực để thoát khỏi một thói quen xấu." },
      study: { upright: "Sự trì hoãn hoặc thói quen xao nhãng có thể đang cản trở việc học của bạn.", reversed: "Bạn đang dần lấy lại kỷ luật và thoát khỏi sự trì hoãn trong học tập." },
      general: { upright: "Hôm nay hãy chú ý đến những cám dỗ hoặc thói quen có thể đang kìm hãm bạn.", reversed: "Đây là dấu hiệu tốt cho thấy bạn đang dần thoát khỏi điều từng ràng buộc mình." }
    },
    icon: "devil"
  },
  {
    id: "tower", number: 16, numeral: "XVI",
    nameVi: "Tòa Tháp", nameTraditional: "The Tower",
    keywords: ["biến động", "đổ vỡ", "bất ngờ", "thức tỉnh"],
    general: {
      upright: "Một sự thay đổi bất ngờ, đột ngột có thể làm đảo lộn những gì bạn nghĩ là vững chắc.",
      reversed: "Bạn đang cố tránh hoặc trì hoãn một sự thay đổi lớn mà lẽ ra nên đối mặt."
    },
    topics: {
      love: { upright: "Một sự thật bất ngờ có thể làm thay đổi hoàn toàn cách bạn nhìn về mối quan hệ này.", reversed: "Bạn có thể đang né tránh đối mặt với một vấn đề lớn trong mối quan hệ." },
      career: { upright: "Một biến động bất ngờ trong công việc có thể xảy ra, nhưng sẽ mở đường cho điều tốt hơn.", reversed: "Bạn có thể đang lo sợ một sự thay đổi lớn ở nơi làm việc và cố trì hoãn nó." },
      money: { upright: "Một biến động tài chính bất ngờ có thể xảy ra — hãy chuẩn bị tinh thần ứng biến.", reversed: "Việc né tránh một vấn đề tài chính nghiêm trọng có thể khiến nó trở nên tệ hơn." },
      health: { upright: "Một vấn đề sức khỏe bất ngờ có thể xuất hiện, nhắc bạn cần thay đổi cách sống.", reversed: "Đừng tiếp tục trì hoãn việc kiểm tra hoặc xử lý một vấn đề sức khỏe đáng lo ngại." },
      study: { upright: "Một thay đổi bất ngờ (đề thi, lịch học...) có thể xảy ra — hãy linh hoạt ứng biến.", reversed: "Việc trì hoãn ôn tập có thể dẫn đến một kết quả bất ngờ không mong muốn." },
      general: { upright: "Hôm nay có thể có một bất ngờ làm xáo trộn kế hoạch của bạn — hãy giữ vững tâm lý.", reversed: "Đừng tiếp tục né tránh một vấn đề mà bạn biết rõ cần phải đối mặt." }
    },
    icon: "tower"
  },
  {
    id: "star", number: 17, numeral: "XVII",
    nameVi: "Ngôi Sao", nameTraditional: "The Star",
    keywords: ["hy vọng", "cảm hứng", "chữa lành", "niềm tin"],
    general: {
      upright: "Hy vọng, niềm tin và cảm hứng đang dẫn đường cho bạn sau một giai đoạn khó khăn.",
      reversed: "Bạn có thể đang mất niềm tin hoặc cảm thấy mất phương hướng tạm thời."
    },
    topics: {
      love: { upright: "Một niềm tin mới, nhẹ nhàng và đầy hy vọng đang trở lại trong chuyện tình cảm của bạn.", reversed: "Bạn có thể đang mất niềm tin vào tình yêu sau một tổn thương nào đó." },
      career: { upright: "Một nguồn cảm hứng mới sẽ giúp bạn nhìn thấy hướng đi rõ ràng hơn trong công việc.", reversed: "Sự mất phương hướng tạm thời có thể đang khiến bạn hoài nghi về con đường mình chọn." },
      money: { upright: "Một tia hy vọng mới cho tình hình tài chính đang dần xuất hiện.", reversed: "Đừng để sự thất vọng trước đó làm bạn mất niềm tin vào khả năng cải thiện tài chính." },
      health: { upright: "Quá trình chữa lành và hồi phục đang diễn ra tích cực, hãy giữ vững niềm tin.", reversed: "Bạn có thể đang cảm thấy kiệt sức hoặc mất hy vọng vào quá trình hồi phục." },
      study: { upright: "Cảm hứng học tập đang trở lại, đây là lúc tốt để theo đuổi điều bạn thật sự yêu thích.", reversed: "Sự mất động lực tạm thời có thể khiến bạn hoài nghi về khả năng của chính mình." },
      general: { upright: "Hôm nay hãy giữ vững niềm tin — những điều tốt đẹp đang dần quay trở lại.", reversed: "Nếu cảm thấy mất phương hướng hôm nay, hãy cho phép mình nghỉ ngơi và tìm lại niềm tin." }
    },
    icon: "star"
  },
  {
    id: "moon", number: 18, numeral: "XVIII",
    nameVi: "Mặt Trăng", nameTraditional: "The Moon",
    keywords: ["trực giác", "mơ hồ", "cảm xúc", "ảo ảnh"],
    general: {
      upright: "Cảm xúc và trực giác đang dẫn dắt bạn qua một giai đoạn còn nhiều điều chưa rõ ràng.",
      reversed: "Sự nhầm lẫn hoặc lo lắng thái quá có thể đang khiến bạn khó phân biệt thật giả."
    },
    topics: {
      love: { upright: "Cảm xúc trong mối quan hệ có thể đang phức tạp, mơ hồ — hãy cho nhau thời gian để hiểu rõ hơn.", reversed: "Sự hiểu lầm hoặc thiếu rõ ràng trong giao tiếp có thể đang gây lo lắng không cần thiết." },
      career: { upright: "Một tình huống công việc chưa rõ ràng cần thêm thời gian để sáng tỏ — đừng vội kết luận.", reversed: "Sự lo lắng thái quá về những điều chưa chắc chắn có thể đang ảnh hưởng đến quyết định của bạn." },
      money: { upright: "Tình hình tài chính có thể còn mơ hồ — hãy thận trọng trước khi đưa ra quyết định lớn.", reversed: "Đừng để sự lo lắng thái quá về tiền bạc dẫn đến những quyết định thiếu sáng suốt." },
      health: { upright: "Hãy chú ý đến những cảm xúc tiềm ẩn có thể đang ảnh hưởng đến sức khỏe tinh thần của bạn.", reversed: "Sự lo âu hoặc mất ngủ kéo dài có thể đang ảnh hưởng nhiều hơn bạn nghĩ." },
      study: { upright: "Trực giác có thể giúp bạn đoán đúng hướng, nhưng đừng quên kiểm chứng lại bằng kiến thức thật.", reversed: "Sự hoang mang hoặc thiếu tự tin có thể đang khiến bạn khó tập trung học tập." },
      general: { upright: "Hôm nay có thể có những điều chưa rõ ràng — hãy tin vào trực giác nhưng đừng vội kết luận.", reversed: "Đừng để lo lắng thái quá chi phối cảm xúc của bạn trong ngày hôm nay." }
    },
    icon: "moon"
  },
  {
    id: "sun", number: 19, numeral: "XIX",
    nameVi: "Mặt Trời", nameTraditional: "The Sun",
    keywords: ["thành công", "niềm vui", "sức sống", "lạc quan"],
    general: {
      upright: "Niềm vui, thành công và năng lượng tích cực đang chiếu sáng con đường của bạn.",
      reversed: "Sự lạc quan thái quá hoặc kỳ vọng chưa thực tế có thể khiến bạn thất vọng."
    },
    topics: {
      love: { upright: "Hạnh phúc và sự ấm áp tràn đầy trong mối quan hệ. Đây là giai đoạn rất tích cực để yêu.", reversed: "Mối quan hệ có thể đang thiếu chân thực hoặc một bên đang che giấu cảm xúc thật." },
      career: { upright: "Thành công và được công nhận trong công việc, năng lượng làm việc dồi dào.", reversed: "Bạn có thể đang quá tự tin hoặc đánh giá thấp khó khăn sắp tới trong công việc." },
      money: { upright: "Tài chính khởi sắc, một giai đoạn thuận lợi để phát triển hoặc đầu tư.", reversed: "Đừng quá lạc quan về tiền bạc — kiểm tra kỹ trước khi chi tiêu hoặc đầu tư lớn." },
      health: { upright: "Sức khỏe tràn đầy năng lượng, tinh thần phấn chấn và tích cực.", reversed: "Có thể bạn đang bỏ qua dấu hiệu mệt mỏi vì quá lạc quan về thể trạng." },
      study: { upright: "Kết quả học tập tích cực, tinh thần minh mẫn và tự tin khi thi cử.", reversed: "Sự tự tin thái quá có thể khiến bạn chủ quan, lơ là việc ôn luyện." },
      general: { upright: "Một ngày tươi sáng, tràn đầy năng lượng tích cực và niềm vui nhỏ bé.", reversed: "Đừng để sự lạc quan che mờ những chi tiết quan trọng hôm nay." }
    },
    icon: "sun"
  },
  {
    id: "judgement", number: 20, numeral: "XX",
    nameVi: "Sự Phán Xét", nameTraditional: "Judgement",
    keywords: ["thức tỉnh", "tái sinh", "đánh giá lại", "lời gọi"],
    general: {
      upright: "Một sự thức tỉnh, nhìn nhận lại bản thân đang giúp bạn bước vào một giai đoạn mới rõ ràng hơn.",
      reversed: "Sự tự trách quá mức hoặc né tránh nhìn nhận lại bản thân có thể đang cản trở bạn."
    },
    topics: {
      love: { upright: "Một sự thấu hiểu sâu sắc hơn về bản thân đang giúp bạn nhìn rõ điều mình thật sự cần trong tình cảm.", reversed: "Bạn có thể đang quá khắt khe khi đánh giá lại một mối quan hệ trong quá khứ." },
      career: { upright: "Đây là thời điểm để nhìn lại hành trình sự nghiệp và đưa ra quyết định quan trọng cho bước tiếp theo.", reversed: "Sự do dự hoặc tự nghi ngờ có thể đang khiến bạn chậm đưa ra quyết định cần thiết." },
      money: { upright: "Một sự nhìn nhận lại toàn diện về tài chính sẽ giúp bạn đưa ra hướng đi đúng đắn hơn.", reversed: "Đừng quá tự trách về những quyết định tài chính trong quá khứ — hãy tập trung vào hiện tại." },
      health: { upright: "Một sự thức tỉnh về lối sống sẽ giúp bạn đưa ra những thay đổi tích cực cho sức khỏe.", reversed: "Sự tự trách về thói quen cũ có thể đang khiến bạn thêm áp lực không cần thiết." },
      study: { upright: "Nhìn lại quá trình học tập sẽ giúp bạn nhận ra điều cần cải thiện cho giai đoạn tới.", reversed: "Đừng quá khắt khe với những kết quả chưa tốt trong quá khứ — hãy xem đó là bài học." },
      general: { upright: "Hôm nay là lúc để nhìn lại bản thân một cách chân thực và chuẩn bị cho một khởi đầu mới.", reversed: "Hãy nhẹ nhàng hơn với bản thân khi nhìn lại những điều chưa hoàn hảo trong quá khứ." }
    },
    icon: "judgement"
  },
  {
    id: "world", number: 21, numeral: "XXI",
    nameVi: "Thế Giới", nameTraditional: "The World",
    keywords: ["hoàn thành", "viên mãn", "thành tựu", "trọn vẹn"],
    general: {
      upright: "Một chu kỳ đang hoàn thành trọn vẹn, mang lại cảm giác thành tựu và viên mãn.",
      reversed: "Một điều gì đó còn chưa hoàn thiện hoặc bạn cảm thấy chưa đạt được cảm giác trọn vẹn mong muốn."
    },
    topics: {
      love: { upright: "Một mối quan hệ đang đạt đến sự hài hòa, trọn vẹn và viên mãn.", reversed: "Bạn có thể đang cảm thấy thiếu một điều gì đó để mối quan hệ thật sự trọn vẹn." },
      career: { upright: "Một dự án hoặc giai đoạn công việc quan trọng đang đi đến thành công trọn vẹn.", reversed: "Bạn có thể đang gần đạt được mục tiêu nhưng còn thiếu một bước cuối cùng để hoàn thiện." },
      money: { upright: "Tài chính đạt đến một cột mốc viên mãn nhờ những nỗ lực bền bỉ trước đó.", reversed: "Một mục tiêu tài chính có thể đang gần hoàn thành nhưng cần thêm chút kiên trì." },
      health: { upright: "Sức khỏe đạt đến trạng thái cân bằng và viên mãn nhờ quá trình chăm sóc bền bỉ.", reversed: "Bạn có thể đang gần đạt được mục tiêu sức khỏe nhưng cần thêm thời gian kiên trì." },
      study: { upright: "Một giai đoạn học tập quan trọng đang hoàn thành tốt đẹp, ghi nhận xứng đáng cho nỗ lực của bạn.", reversed: "Bạn đang gần hoàn thành mục tiêu học tập nhưng đừng từ bỏ ở những bước cuối cùng." },
      general: { upright: "Hôm nay đánh dấu một sự hoàn thành trọn vẹn — hãy tự hào về hành trình của mình.", reversed: "Một điều gì đó vẫn còn dang dở hôm nay — hãy kiên trì thêm một chút nữa." }
    },
    icon: "world"
  }
];

function getCardById(cardId) {
  return TAROT_CARDS.find(function (c) { return c.id === cardId; }) || null;
}
