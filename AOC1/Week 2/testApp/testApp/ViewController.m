//
//  ViewController.m
//  testApp
//
//  Created by Derek Bertubin on 10/4/12.
//  Copyright (c) 2012 Derek Bertubin. All rights reserved.
//

#import "ViewController.h"

@interface ViewController ()

@end

@implementation ViewController

- (void)viewDidLoad
{
    [super viewDidLoad];
	// Do any additional setup after loading the view, typically from a nib.
    
    // Set BG color and used http://www.touch-code-magazine.com/web-color-to-uicolor-convertor/ this was used for all color conversions below
        
    self.view.backgroundColor = [UIColor colorWithRed:0.541 green:0.537 blue:0.561 alpha:1]; /*#8a898f*/
}

- (void) viewWillAppear:(BOOL)animated{
    // Title
    UILabel * title = [[UILabel alloc] initWithFrame:CGRectMake(10.0f, 10.0f, 300.0f, 20.0f)];
    if (title != nil) {
        title.backgroundColor = [UIColor colorWithRed:0.992 green:0.729 blue:0.11 alpha:1]; /*#fdba1c*/
        title.text = @"The Celestine Prophesy";
        title.textAlignment = UITextAlignmentCenter;
        // Note: ***UITextAlignmentCenter, Left and Right are depreciated in iOS 6, tried to use NSTextAlign, but it threw an error in main.m****

    }
    // Author Label
    UILabel * authorLabel = [[UILabel alloc] initWithFrame:CGRectMake(10.0f, 40.0f, 145.0f, 20.0f)];
    if (authorLabel != nil) {
        authorLabel.backgroundColor = [UIColor colorWithRed:0.992 green:0.729 blue:0.11 alpha:1]; /*#fdba1c*/
        authorLabel.text = @"Author: ";
        authorLabel.textAlignment = UITextAlignmentRight;
        
    }
    // Author Name
    UILabel * author = [[UILabel alloc] initWithFrame:CGRectMake(165.0f, 40.0f, 145.0f, 20.0f)];
    if (author != nil) {
        author.backgroundColor = [UIColor colorWithRed:0.992 green:0.729 blue:0.11 alpha:1]; /*#fdba1c*/
        author.text = @" Redfield, James";
        author.textAlignment = UITextAlignmentLeft;
        
    }
    // Published Label
    UILabel * publishedLabel = [[UILabel alloc] initWithFrame:CGRectMake(10.0f, 70.0f, 145.0f, 20.0f)];
    if (publishedLabel != nil) {
        publishedLabel.backgroundColor = [UIColor colorWithRed:0.992 green:0.729 blue:0.11 alpha:1]; /*#fdba1c*/
        publishedLabel.text =  @"Published: ";
        publishedLabel.textAlignment = UITextAlignmentRight;
    }
    // Published Date
    UILabel * publishedDate = [[UILabel alloc] initWithFrame:CGRectMake(165.0f, 70.0f, 145.0f, 20.0f)];
    if (publishedDate != nil) {
        publishedDate.backgroundColor = [UIColor colorWithRed:0.992 green:0.729 blue:0.11 alpha:1]; /*#fdba1c*/
        publishedDate.text = @" 1993";
        publishedDate.textAlignment = UITextAlignmentLeft;
    }
    // Summary Label
    UILabel * summaryLabel = [[UILabel alloc] initWithFrame:CGRectMake(10.0f, 100.0f, 145.0f, 20.0f)];
    if (summaryLabel != nil) {
        summaryLabel.backgroundColor= [UIColor colorWithRed:0.992 green:0.729 blue:0.11 alpha:1]; /*#fdba1c*/
        summaryLabel.text = @"Summary: ";
        summaryLabel.textAlignment = UITextAlignmentLeft;
    }
    // Summary
    UILabel * summary = [[UILabel alloc] initWithFrame:CGRectMake(10.0f, 130.0f, 300.0f, 250.0f)];
    if (summary != nil) {
        summary.backgroundColor= [UIColor colorWithRed:0.992 green:0.729 blue:0.11 alpha:1]; /*#fdba1c*/
        summary.text =@"The story of the Celestine Prophesy tells about a man’s adventure into the synchronicities of life. While on this journey, the reluctant main character, John, encounters the 9 Insights, each giving him a deeper understanding and experience in his own spiritual growth.The story is packed with chases, near death experience,revelation and awakening. It is sure to keep you on the edge of your seat and centered in your soul.";
        summary.textAlignment = UITextAlignmentCenter;
        summary.numberOfLines = 30;
    }
    
    // List Label
    UILabel * listLabel = [[UILabel alloc] initWithFrame:CGRectMake(10.0f, 390.0f, 300.0f, 30.0f)];
    if (listLabel != nil) {
        listLabel.backgroundColor = [UIColor colorWithRed:0.992 green:0.729 blue:0.11 alpha:1]; /*#fdba1c*/
        listLabel.text = @"List of Topics";
        listLabel.textAlignment = UITextAlignmentLeft;
    }
    // Create NSArray and pass thru objects thru mutableString using a for loop
    // the assignment asked for NSStrings, for optimization reasons I did not create seperate strings and them call them into the array
    // eg. NSString * string1 = @"1st Insight";
    //     NSString * string2 = @"2nd Insight";
    //     NSArray * listArray =[[NSArray alloc] initWithObjects:string1, string2 , etc..., nil];
    NSArray * listArray =[[NSArray alloc] initWithObjects:@"1st Insight", @"2nd Insight",@"3rd Insight", @"4th Insight", @"5th Insight",nil];
    NSMutableString * mutableString = [[NSMutableString alloc] init];
    for (int i=0; i < [listArray count]; i++) {
        [mutableString appendFormat:@"%@, ", listArray[i]];
    }
    
    // List field with dynamic list from mutableString 
    UILabel * list = [[UILabel alloc] initWithFrame:CGRectMake(10.0f, 420.0f, 300.0f, 45.0f)];
    if (list != nil) {
        list.backgroundColor = [UIColor colorWithRed:0.992 green:0.729 blue:0.11 alpha:1]; /*#fdba1c*/
        list.text = mutableString;
        list.textAlignment = UITextAlignmentCenter;
        list.numberOfLines = 2;
    }
    
    // Adding Subviews of UILabels and Content
    [self.view addSubview:title];
    [self.view addSubview:authorLabel];
    [self.view addSubview:author];
    [self.view addSubview:publishedLabel];
    [self.view addSubview:publishedDate];
    [self.view addSubview:summaryLabel];
    [self.view addSubview:summary];
    [self.view addSubview:listLabel];
    [self.view addSubview:list];
    
    [super viewWillAppear:animated];
}


- (void)didReceiveMemoryWarning
{
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}

@end
