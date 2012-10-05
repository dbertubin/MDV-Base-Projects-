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
    self.view.backgroundColor = [UIColor colorWithRed:0.541 green:0.537 blue:0.561 alpha:1]; /*#8a898f*/
}

- (void) viewWillAppear:(BOOL)animated{
    
    UILabel * title = [[UILabel alloc] initWithFrame:CGRectMake(10.0f, 10.0f, 300.0f, 25.0f)];
    if (title != nil) {
        title.backgroundColor = [UIColor colorWithRed:0.992 green:0.729 blue:0.11 alpha:1]; /*#fdba1c*/
        title.text = @"The Celestine Prophesy";
        title.textAlignment = UITextAlignmentCenter;
    }
    
    UILabel * authorLabel = [[UILabel alloc] initWithFrame:CGRectMake(10.0f, 45.0f, 145.0f, 25.0f)];
    if (authorLabel != nil) {
        authorLabel.backgroundColor = [UIColor colorWithRed:0.992 green:0.729 blue:0.11 alpha:1]; /*#fdba1c*/
        authorLabel.text = @"Author: ";
        authorLabel.textAlignment = UITextAlignmentRight;

    }
    
    UILabel * author = [[UILabel alloc] initWithFrame:CGRectMake(165.0f, 45.0f, 145.0f, 25.0f)];
    if (author != nil) {
        author.backgroundColor = [UIColor colorWithRed:0.992 green:0.729 blue:0.11 alpha:1]; /*#fdba1c*/
        author.text = @" Redfield, James";
        author.textAlignment = UITextAlignmentRight;
        
    }
    
    UILabel * published = [[UILabel alloc] initWithFrame:CGRectMake(10.0f, 80.0f, 145.0f, 25.0f)];
    if (published != nil) {
        published.backgroundColor = [UIColor colorWithRed:0.992 green:0.729 blue:0.11 alpha:1]; /*#fdba1c*/
        published.text =  @"Published: ";
        published.textAlignment = UITextAlignmentLeft;
    }
    
    UILabel * publishedDate = [[UILabel alloc] initWithFrame:CGRectMake(165.0f, 80.0f, 145.0f, 25.0f)];
    if (publishedDate != nil) {
        publishedDate.backgroundColor = [UIColor colorWithRed:0.992 green:0.729 blue:0.11 alpha:1]; /*#fdba1c*/
        publishedDate.text = @" 1993";
        publishedDate.textAlignment = UITextAlignmentLeft;
    }
    
    UILabel * summary = [[UILabel alloc] initWithFrame:CGRectMake(10.0f, 115.0f, 145.0f, 25.0f)];
    if (summary != nil) {
        summary.backgroundColor= [UIColor colorWithRed:0.992 green:0.729 blue:0.11 alpha:1]; /*#fdba1c*/
        summary.text = @"Summary";
        summary.textAlignment = UITextAlignmentLeft;
    }
    
    UILabel * plot = [[UILabel alloc] initWithFrame:CGRectMake(10.0f, 150.0f, 300.0f, 250.0f)];
    if (plot != nil) {
        plot.backgroundColor= [UIColor colorWithRed:0.992 green:0.729 blue:0.11 alpha:1]; /*#fdba1c*/
        plot.text =@"The story of the Celestine Prophesy tells about a man’s adventure into the synchronicities of life. While on this journey, the reluctant main character, John, encounters the 9 Insights, each giving him a deeper understanding and experience in his own spiritual growth. This is no Yoga in the Park story; it’s packed with chases, near death experience,revelation and awakening. It is sure to keep you on the edge of your seat and centered in your soul.";
        plot.textAlignment = UITextAlignmentCenter;
        plot.numberOfLines = 30;
    }
    
    [self.view addSubview:title];
    [self.view addSubview:authorLabel];
    [self.view addSubview:author];
    [self.view addSubview:published];
    [self.view addSubview:publishedDate];
    [self.view addSubview:summary];
    [self.view addSubview:plot];
    
    [super viewWillAppear:animated];
}


- (void)didReceiveMemoryWarning
{
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}

@end
